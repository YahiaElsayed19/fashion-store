import React from 'react'
import { categoriesLinks } from '@util/links'
import LinksCatalog from "@components/LinksCatalog";
const page = () => {
    return (
        <LinksCatalog links={categoriesLinks} title='Categories'/>
    )
}

export default page