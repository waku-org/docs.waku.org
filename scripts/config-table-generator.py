import requests


def extract_config_param(line, param):
    return line.split(f"{param}: ")[1].strip()[1:].split('"')[0].strip()


def remove_extra_char(string, char):
    if string[-1] == char:
        string = string[:-1]
    return string


def parse_table_heading(line):
    table_heading = line.split("##")[1].strip()
    # ensure only config blocks are captured
    if "config" not in table_heading or "Application-level" in table_heading:
        return None, False
    else:
        table_heading = table_heading.title()

    # ensuring heading consistency
    words = [
        ("Configuration", "Config"),
        ("And", "and"),
        ("Lightpush", "Light Push"),
        ("Json-Rpc", "JSON-RPC"),
        ("Rest Http", "REST HTTP"),
        ("Dns", "DNS"),
        ("V5", "v5"),
        ("Websocket", "WebSocket")
    ]
    for word in words:
        table_heading = table_heading.replace(word[0], word[1])
    return "## " + table_heading, True


def extract_config(config_path):
    # fetch the config file
    config_data = requests.get(config_path)
    if config_data.status_code == 200:
        config_data = config_data.text.split("\n")
    else:
        exit("An error occurred while fetching the config file")

    config_table = "## Application-Level Config\n\n| Name | Default Value | Description |\n| - | - | - |\n"
    row = {"name": None, "default": "", "description": None}
    for line in config_data:
        line = line.strip()

        # we've left a config block
        if line == "":
            # check if there's a config
            if row["description"] is not None and row["name"] != "topics":
                # patch since this config executes Nim
                if row["name"] == "store-message-retention-policy":
                    row["default"] = "time:172800"
                # patch as nat config name is missing
                if row["name"] is None:
                    row["name"], row["default"] = "nat", "any"
                    row["description"] += ". Must be one of: any, none, upnp, pmp, extip:<IP>"
                config_table += f"| `{row['name']}` | {row['default']} | {row['description']} |\n"
            row = {"name": None, "default": "", "description": None}

        # create a new config config_table
        if line.startswith("## "):
            table_heading, is_valid_heading = parse_table_heading(line)
            if is_valid_heading:
                config_table += f"\n{table_heading}\n\n| Name | Default Value | Description |\n| - | - | - |\n"
        
        # extract the config name
        if line.startswith("name:"):
            row["name"] = extract_config_param(line, "name")

        # extract the config default value
        if line.startswith("defaultValue:"):
            default_value = line.split("defaultValue: ")[1].strip()
            if '""' not in default_value:
                default_value = f"`{remove_extra_char(default_value, ',')}`".replace('"', "")
                if "ValidIpAddress.init" in default_value:
                    default_value = default_value.replace("ValidIpAddress.init(", "").replace(")", "")
                row["default"] = default_value

        # extract the config description
        if line.startswith("desc:"):
            description = remove_extra_char(extract_config_param(line, "desc"), ".").replace("|", "\|")
            row["description"] = description[0].upper() + description[1:]
    
    return config_table.replace(">", "\>")

if __name__ == "__main__":
    config_path = "https://raw.githubusercontent.com/waku-org/nwaku/master/apps/wakunode2/config.nim"
    table_data = extract_config(config_path)
    print(table_data)