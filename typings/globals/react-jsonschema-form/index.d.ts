// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/40e416a33c4f14c40ebb888b43d3b38812df6829/react-jsonschema-form/index.d.ts
declare module "react-jsonschema-form" {
    import * as React from "react";

    export interface FormProps {
        schema: {};
        uiSchema?: {};
        formData?: any;
        widgets?: {};
        fields?: {};
        noValidate?: boolean;
        showErrorList?: boolean;
        validate?: (formData: any, errors: any) => any;
        onChange?: (e: IChangeEvent) => any;
        onError?: (e: any) => any;
        onSubmit?: (e: any) => any;
        liveValidate?: boolean;
        safeRenderCompletion?: boolean;
    }

    export interface IChangeEvent {
        edit: boolean;
        formData: any;
        errors: any[];
        errorSchema: any;
        idSchema: any;
        status: string;
    }

    export default class Form extends React.Component<FormProps, any> {}
}
