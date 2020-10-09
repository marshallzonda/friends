import React from 'react';
import s from './ProfileInfo.module.css'
import { useState,useEffect } from 'react';


const ProfileStatusWithHooks =(props) => {
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);
    
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activatedEditMode = ()=>{
        setEditMode(true)
    }
    const deactivatedEditMode = ()=>{
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) =>{
       setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activatedEditMode}> {props.status || "----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} onBlur={deactivatedEditMode} value={status} autoFocus   />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks