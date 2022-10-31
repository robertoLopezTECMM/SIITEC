import React, {useRef, useState} from 'react';
import './DropFileInput.css';


import uploadImg from './cloud.png';

interface inputFileProps{
    message: string;
    onChangeInputFiles: ({files}:any) => void
}

export const DropFileInput = ({message, onChangeInputFiles}:inputFileProps) => {

    const [fileName, setFileName] = useState('')
    const [file, setFile] = useState<any>(null)

    const wrapperRef = useRef(null);

    return (
        <>
            {file != null ? 
                <>
                <h1>el nombre del archivo es: {file.name}</h1>
                <h1 onClick={()=>setFile(null)}>cancelar archivo</h1>
                </>
                
                :

                <div className='drop-file-input'>
                    <div className='drop-file-input_label'>
                        <h1>
                            <i className="material-icons">cloud_upload</i>
                        </h1>
                        <p>{message}</p>

                    </div>
                    
                    <input multiple type="file" value="" onChange={(e)=> [setFile(e.target.files), onChangeInputFiles(e.target.files)]}/>
                </div>
            }
        
        </>


    );
}
