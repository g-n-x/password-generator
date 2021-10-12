import React, {useState} from 'react'
import {
    Slider,
    TextField,
    Typography
  } from '@material-ui/core'

const PassGen: React.FC = () => {
    const [passLen, setPassLen] = useState(8)
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField label="password" />
            <Slider
                defaultValue={8}
                max={256}
                onChange={
                    (ev, val) => {
                        setPassLen(Number(val))
                    }
                }
            />
            <Typography>Password Length: {passLen}</Typography>
        </div>
    )
}

export default PassGen
