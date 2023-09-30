import React from "react";
import { typesLinks } from "@util/links";
import LinksCatalog from "@components/LinksCatalog";
const page = () => {
    return (
        <LinksCatalog links={typesLinks} title="Types"/>
    );
};

export default page;
