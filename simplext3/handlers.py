import json
from jupyter_server.base.handlers import APIHandler
from jupyter_server.utils import url_path_join
from tornado import web

## TODO: Complete this class

from .utils import get_package_info


class DataTableHandler(APIHandler):

    @web.authenticated
    def get(self):
        self.write(json.dumps(get_package_info()))


def setup_handlers(web_app):
    host_pattern = ".*$"
    route_pattern = url_path_join(web_app.settings["base_url"], "/v1/pip-list")
    web_app.add_handlers(host_pattern, [(route_pattern, DataTableHandler)])
