import React from 'react'
import { Progress } from 'semantic-ui-react'
import Button from '@material-ui/core/Button';

const ProgressExampleColor = () => (
  <div style={{
    height: 260,
    width: 433, backgroundColor: 'white'
        }}>
    <h2 style={{ textAlign: 'center', fontWeight: "700" }}>Free-time Usage</h2>
    <div className='container' style={{ marginLeft: '50px', marginTop: '14px' }}>
        <div style={{ display: 'flex', marginTop: '34px', marginLeft: '70px', wordSpacing: '133px', fontWeight: "700" }}>
            Used Max
      </div>
        <div style={{ display: 'flex', marginTop: '10px', marginLeft: '70px', wordSpacing: '140px', color: 'green', fontWeight: "500" }}>
            30m 2h
      </div>
        <div style={{ marginTop: '10px', marginLeft: '70px', width: "200px" }}>
            <Progress percent={30} color='green' />
        </div>
        <div style={{marginLeft: '70px',marginTop: '5px'}}>
            <Button variant="outlined" color="primary">
                Extend Free Time
                    </Button>
        </div>            
            
    </div>

</div>
)

export default ProgressExampleColor