import re
import requests
from typing import Tuple, Dict, Any

def extract_config_param(line: str, param: str) -> str:
    return re.split(f'{param}: ', line)[1].strip()[1:].split('"')[0].strip()

def remove_extra_char(string: str, char: str) -> str:
    return string[:-1] if string[-1] == char else string

def parse_table_heading(line: str) -> Tuple[str, bool]:
    table_heading = re.split('##', line)[1].strip()
    if 'config' not in table_heading or 'Application-level' in table_heading:
        return None, False
    table_heading = table_heading.capitalize()

    word_replace_re = re.compile('|'.join([
        r'(Configuration)', r'(And)', r'(Lightpush)',
        r'(Json-Rpc)', r'(Rest Http)', r'(Dns)',
        r'(Discovery V5)', r'(Websocket)'
    ]))
    word_replace_dict = {
        'Configuration': 'config', 'And': 'and', 'Lightpush': 'Light push',
        'Json-Rpc': 'JSON-RPC', 'Rest Http': 'REST HTTP', 'Dns': 'DNS',
        'Discovery V5': 'Discv5', 'Websocket': 'WebSocket'
    }
    table_heading = word_replace_re.sub(lambda match: word_replace_dict[match.group(0)], table_heading)
    return '## ' + table_heading, Trues

def fetch_config_file(config_path: str) -> str:
    config_file = requests.get(config_path)
    if config_file.status_code == 200:
        return config_file.text.split("\n")
    else:
        exit("An error occurred while fetching the config file")

def extract_config(config_path: str) -> str:
    config_data = fetch_config_file(config_path)

    config_table = "## Application-level config\n\n| Name | Default Value | Description |\n| - | - | - |\n"
    row = {"name": None, "default": "", "description": None}
    for line in config_data:
        line = line.strip()

        if line == "":
            if row["description"] is not None and row["name"] != "topics":
                if row["name"] == "store-message-retention-policy":
                    row["default"] = "time:172800"
                if row["name"] is None:
                    row["name"], row["default"] = "nat", "any"
                    row["description"] += ". Must be one of: any, none, upnp, pmp, extip:<IP>"
                config_table += f"| `{row['name']}` | {row['default']} | {row['description']} |\n"
            row = {"name": None, "default": "", "description": None}

        if line.startswith("## "):
            table_heading, is_valid_heading = parse_table_heading(line)
            if is_valid_heading:
                config_table += f"\n{table_heading}\n\n| Name | Default Value | Description |\n| - | - | - |\n"
        
        if line.startswith("name:"):
            row["name"] = extract_config_param(line, "name")

        if line.startswith("defaultValue:"):
            default_value = re.split("defaultValue: ", line)[1].strip()
            if '""' not in default_value:
                default_value = f"`{remove_extra_char(default_value, ',')}`".replace("@", "")
                if "[" not in default_value:
                    default_value = default_value.replace('"', "")
                if "ValidIpAddress.init" in default_value:
                    default_value = default_value.replace("ValidIpAddress.init(", "").replace(")", "")
                row["default"] = default_value

        if line.startswith("desc:"):
            description = remove_extra_char(extract_config_param(line, "desc"), ".").replace("|", "\|")
            row["description"] = description[0].upper() + description[1:]

    return config_table.replace(">", "\>")


if __name__ == "__main__":
    config_path = "https://raw.githubusercontent.com/waku-org/nwaku/master/apps/wakunode2/external_config.nim"
    table_data = extract_config(config_path)
    print(table_data)