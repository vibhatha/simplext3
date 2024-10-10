import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';
import { DataTableWidget } from './DataTableWidget';

function activate(app: JupyterFrontEnd, palette: ICommandPalette) {
  console.log('JupyterLab extension simplext3 is activated!');

  var newWidget = () => {
    var content = new DataTableWidget();
    var widget = new MainAreaWidget({ content });
    widget.id = 'simplext3-widget';
    widget.title.label = 'Sample Data Table';
    widget.title.closable = true;
    return widget;
  }

  let widget = newWidget();

  const command: string = "open:simplext3";

  app.commands.addCommand(command, {
    label: 'Open Sample Data Table',
    execute: () => {
      if (widget.isDisposed) {
        widget = newWidget();
      }
      if (!widget.isAttached) {
        app.shell.add(widget, 'main');
      }

      app.shell.activateById(widget.id);
    }
  });

  palette.addItem(
    { command, category: 'Tutorial' }
  );

}

/**
 * Initialization data for the simplext3 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'simplext3:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  requires: [ICommandPalette],
  activate: activate
};

export default plugin;
