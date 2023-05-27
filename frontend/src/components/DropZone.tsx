import { FC, useCallback } from 'react'
import { FileWithPath, useDropzone } from 'react-dropzone'

interface IMyDropzone {
  setImg: (formData: FormData) => void
}

const MyDropzone: FC<IMyDropzone> = ({ setImg }) => {
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    const formData = new FormData()
    formData.append('file', acceptedFiles[0])
    setImg(formData)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noKeyboard: true
  })

  return (
    <div {...getRootProps()} className="border-dashed border-2 w-full py-8 cursor-pointer mb-4">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      )}
    </div>
  )
}

export default MyDropzone
