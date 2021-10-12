import React, {useState} from 'react'
import {
    Slider,
    Typography
  } from '@material-ui/core'

const PassGen: React.FC = () => {
    const [passLen, setPassLen] = useState(8)
    return(
        <>
            <Slider
                defaultValue={8}
                style={{width: 396}}
                max={256}
                onChange={
                    (ev, val) => {
                        setPassLen(Number(val))
                    }
                }
            />
            <Typography>Password Length: {passLen}</Typography>
        </>
    )
}

export default PassGen
