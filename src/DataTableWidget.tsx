import React from 'react'
import { ReactWidget } from '@jupyterlab/apputils'
import DataObject from './DataObject';
import DataTable from './DataTable';

export class DataTableWidget extends ReactWidget {
    private data: DataObject[] = [];

    constructor() {
        super();
        this.load();
    }

    async load() {
        // TODO: here we should probablyu call an API to get the data
        var response = await fetch("/v1/pip-list");
        if (!response.ok) {
            console.log("Error occurred in loading data");
        }
        var result = await response.json()
        this.data = result.map((pkg: any, index: number) => (
            {
                id: index + 1,
                name: pkg.name,
                version: pkg.version
            }
        ));
    }

    render(): JSX.Element {
        return <DataTable data={this.data} />
    }
}