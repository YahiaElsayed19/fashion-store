import React from 'react'
import { FaTrash } from "react-icons/fa";

const ClearButton = ({ clearHandler }: { clearHandler: any }) => {
    return (
        <button
            aria-label="delete all"
            type="button"
            onClick={clearHandler}
        >
            <FaTrash className=" w-5 h-5 mt-4 hover:text-red-600" />
        </button>
    )
}

export default ClearButton