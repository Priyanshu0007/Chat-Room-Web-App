import React, { useCallback, useState } from 'react'
import { Alert, Icon, InputGroup } from 'rsuite'
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { storage } from '../../../misc/firebase';

const AudioMsgBtn = ({afterUpload}) => {
    const {chatId}=useParams();
    const [isRecording,setIsRecording]=useState(false);
    const [isLoading,setIsLoading]=useState(false)
    const onClick=useCallback(() => {
        setIsRecording(p=>!p);
      },[]);
    const onUpload=useCallback(async(data)=>{
        setIsLoading(true);
        try {
            const snap=await storage.ref(`/chat/${chatId}`).child(`audio_${Date.now()}.mp3`).put(data.blob,{cacheControl:`public,max-age=${3600*24*3}`});
            const file= {
                contentType:snap.metadata.contentType,
                name:snap.metadata.name,
                url:await snap.ref.getDownloadURL(),
            }
            afterUpload([file])
            setIsLoading(false);
        } catch (err) {
           Alert.error(err.message,4000);
           setIsLoading(false);
        }
    },[afterUpload,chatId]);
  return (
    <div>
        <InputGroup.Button onClick={onClick} disabled={isLoading} className={isRecording?"animate-blink":""}>
            <Icon icon="microphone" />
        </InputGroup.Button>
        <ReactMic
          record={isRecording}
          className="d-none"
          onStop={(onUpload)}
          mimeType="audio/mp3" />
    </div>
  )
}

export default AudioMsgBtn