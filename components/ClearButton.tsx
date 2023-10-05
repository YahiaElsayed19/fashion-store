import React from 'react'
import { FaTrash } from "react-icons/fa";

const ClearButton = ({ clearHandler }: { clearHandler: () => Promise<void> }) => {
    return (
        <button
            aria-label="delete all"
            type="button"
            onClick={clearHandler}
        >
            <FaTrash className=" w-5 h-5 hover:text-red-600" />
        </button>
    )
}

export default ClearButton