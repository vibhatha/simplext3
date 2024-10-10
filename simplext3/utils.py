import subprocess


def get_package_info():
    res = subprocess.run(["pip", "list"], text=True, capture_output=True)
    res_stdout = res.stdout.strip()
    res_lines = res_stdout.split("\n")[2:]
    package_info = []
    for res_line in res_lines:
        values = res_line.split()
        package_info.append({"name": values[0], "version": values[1]})
    return package_info
