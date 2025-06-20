"use client";
import { convertFileToUrl } from "@/lib/utils";
import { FileUploaderProps } from "@/types"

import { useDropzone } from "@uploadthing/react";
import { useCallback } from "react";
import {
    generateClientDropzoneAccept,
} from "uploadthing/client";
import { Button } from "../ui/button";
import Image from "next/image";
const FileUploader = (
    { onFieldChange, imageUrl, setFiles }: FileUploaderProps
) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(acceptedFiles);
        onFieldChange(convertFileToUrl(acceptedFiles[0]));
    }, [onFieldChange, setFiles]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: generateClientDropzoneAccept(['image/png', 'image/jpeg', 'image/svg+xml']),
    });
    return (
        <div {...getRootProps()} className="flex items-center justify-center bg-dark-3 flex h-72 cursor-pointer flex-col overflow-hidden rounded-xl bg-gray-50">
            <input {...getInputProps()} />
            {imageUrl ? (
                <div className="flex h-full w-full flex-1 justify-center ">
                    <Image
                        src={imageUrl}
                        alt="image"
                        width={250}
                        height={250}
                        className="w-full object-cover object-center"
                    />
                </div>
            ) : (
                <div className="flex items-center justify-center flex-col py-5 text-gray-500">
                    <Image src="/assets/icons/upload.svg" width={77} height={77} alt="file upload" className="filter-gray" />
                    <h3 className="mb-2 mt-2">Arrastra y sube una foto</h3>
                    <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
                    <Button type="button" className="rounded-full">
                        Selecciona desde tu dispositivo
                    </Button>
                </div>
            )}
        </div>
    );
}

export default FileUploader