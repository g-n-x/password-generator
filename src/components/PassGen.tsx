import React, {useState} from 'react'
import {
    Slider,
    TextField,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Input
  } from '@material-ui/core'

const PassGen: React.FC = () => {
    const [passLen, setPassLen] = useState(8)
    const [config, setConfig] = useState(['lowercase'])

    const handleConfig = (_event: any, newConfig: any) => {
        setConfig(newConfig)
    }

    const handleLenChange = (event: any) => {
        const newVal = Math.min(
            Math.max(Number(event.target.value), 0), 256
        )
        setPassLen(newVal)
    }

    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField label="password" />
            <Slider
                value={passLen}
                max={256}
                onChange={
                    (_ev, val) => {
                        setPassLen(Number(val))
                    }
                }
            />
            <div
                style={{display: 'flex', gap: 20}}
            >
                <Typography>Password Length: </Typography>
                <Input
                    type="number"
                    style={{width: 50}}
                    value={passLen}
                    onChange={handleLenChange}
                />
            </div>
            <Typography>Character Types</Typography>
            <ToggleButtonGroup
                value={config}
                onChange={handleConfig}
            >
                <ToggleButton value="uppercase">A-Z</ToggleButton>
                <ToggleButton value="lowercase">a-z</ToggleButton>
                <ToggleButton value="numbers">0-9</ToggleButton>
                <ToggleButton value="special1"># $ % &amp; @ ^ ` ~</ToggleButton>
                <ToggleButton value="special2">. , : ;</ToggleButton>
                <ToggleButton value="special3">" '</ToggleButton>
                <ToggleButton value="special4">\ / | _ -</ToggleButton>
                <ToggleButton value="special5">&lt; * + ! ? = &gt;</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}

export default PassGen
