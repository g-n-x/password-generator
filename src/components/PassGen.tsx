import React, {useEffect, useState, useCallback} from 'react'
import {
    Slider,
    TextField,
    Typography,
    ToggleButtonGroup,
    ToggleButton,
    Input
  } from '@material-ui/core'

// char sets
const lower: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const upper: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const numbers: string[] = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const special1: string[] = [
    '#', '$', '%', '&', '@', '^', '`', '~'
]

const special2: string[] = [
    '.', ',', ':', ';'
]

const special3: string[] = [
    '"', '\''
]

const special4: string[] = [
    '\\', '/', '|', '_', '-'
]

const special5: string[] = [
    '<', '*', '+', '!', '?', '=', '>'
]

const PassGen: React.FC = () => {
    // states
    const [txtPass, setTxtPass] = useState('')
    const [passLen, setPassLen] = useState(8)
    const [config, setConfig] = useState(['lowercase'])

    // functions
    const updatePass = useCallback(() => {
        let newPass: string = ''
        for(let i = 0; i < passLen; ++i) {
            // between 0 and 6
            let rand = Math.floor(Math.random() * config.length)
            let charSet: string = config[rand]
            switch(charSet) {
                case 'lowercase':
                    newPass += lower[Math.floor(Math.random() * lower.length)]
                    break;
                case 'uppercase':
                    newPass += upper[Math.floor(Math.random() * upper.length)]
                    break;
                case 'numbers':
                    newPass += numbers[Math.floor(Math.random() * numbers.length)]
                    break;
                case 'special1':
                    newPass += special1[Math.floor(Math.random() * special1.length)]
                    break;
                case 'special2':
                    newPass += special2[Math.floor(Math.random() * special2.length)]
                    break;
                case 'special3':
                    newPass += special3[Math.floor(Math.random() * special3.length)]
                    break;
                case 'special4':
                    newPass += special4[Math.floor(Math.random() * special4.length)]
                    break;
                case 'special5':
                    newPass += special5[Math.floor(Math.random() * special5.length)]
                    break;
            }
        }
        setTxtPass(newPass)
    }, [passLen, config])
    
    const handleConfig = (_event: any, newConfig: any) => {
        setConfig(newConfig)
    }

    const handleLenChange = (event: any) => {
        // handles the range of 0 to 256 for event.target.value
        const newVal = Math.min(
            Math.max(Number(event.target.value), 0),
            256
        )
        setPassLen(newVal)
    }

    // effect
    useEffect(() => {
        updatePass()
    }, [updatePass, passLen, config])

    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <TextField
                value={txtPass}
                label="password"
            />
            <Slider
                value={passLen}
                max={256}
                onChange={
                    (_ev, val) => {
                        setPassLen(Number(val))
                    }
                }
            />
            <div style={{display: 'flex', gap: 20}} >
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
