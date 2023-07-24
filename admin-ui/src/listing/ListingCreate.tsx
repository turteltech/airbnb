import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="listingCreatedBy" source="listingCreatedBy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
