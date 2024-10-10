from setuptools import setup, find_packages

setup(
    name="simplext3",
    version="0.1.0",
    packages=find_packages(),
    include_package_data=True,
    install_requires=["jupyter_server"],
    entry_points={
        "jupyter_serverproxy_servers": [
            "simplext3 = simplext3:load_jupyter_server_extension"
        ]
    },
    package_data={"simplext3": ["*"]},
)
