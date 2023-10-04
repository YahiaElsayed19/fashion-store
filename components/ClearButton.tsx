import React from 'react'
import { FaTrash } from "react-icons/fa";

const ClearButton = ({ clearHandler }: { clearHandler: any }) => {
    return (
        <button
            aria-label="delete all"
            type="button"
            className="flex justify-center gap-2 items-center py-1 px-3 text-white bg-red-600 font-medium text-sm rounded-full"
            onClick={clearHandler}
        >
            Clear
            <FaTrash className="text-white w-4 h-3" />
        </button>
    )
}

export default ClearButton