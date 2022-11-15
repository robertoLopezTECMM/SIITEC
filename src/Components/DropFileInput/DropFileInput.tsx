import React, {useRef, useState} from 'react';
import './DropFileInput.css';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


import uploadImg from './cloud.png';
import { borderColor } from '@mui/system';

interface inputFileProps{
    message: string;
    borderColor: string;
    onChangeInputFiles: ({files}:any) => void
}

export const DropFileInput = ({message, onChangeInputFiles, borderColor}:inputFileProps) => {

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

                <div className='drop-file-input' style={{borderColor:borderColor}}>
                    <div className='drop-file-input_label'>
                        <h1>
                            <CloudUploadOutlinedIcon fontSize='large'/>
                        </h1>
                        <p>{message}</p>

                    </div>
                    
                    <input multiple type="file" value="" onChange={(e)=> [setFile(e.target.files), onChangeInputFiles(e.target.files)]}/>
                </div>
            }
        
        </>


    );
}
