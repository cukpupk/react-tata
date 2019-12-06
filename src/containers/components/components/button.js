import React, {Component} from 'react';
import TwoTabs from '../../../components/TwoTabs';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const buildCode = () => {
    return (
        `import { Button } from "@material-ui/core/Button"

<Button
    color="primary | secondary"
    variant="outlined | contained"
    size="small | medium | large"
>
    Button
</Button>

<Button disabled>Disabled Button</Button>`
    )
}

const buildDemo = () => {
    return (
        <div className="button-section">
            <h3>Contained Buttons</h3>
            <div className='section'>
                <Button variant="contained" className='button'>
                    Default
                </Button>
                <Button variant="contained" color="primary" className='button'>
                    Primary
                </Button>
                <Button variant="contained" color="secondary" className='button'>
                    Secondary
                </Button>
                <Button variant="contained" color="secondary" disabled className='button'>
                    Disabled
                </Button>
            </div>
            <h3>Outlined Buttons</h3>
            <div className='section'>
            <Button variant="outlined" className='button'>
                Default
            </Button>
            <Button variant="outlined" color="primary" className='button'>
                Primary
            </Button>
            <Button variant="outlined" color="secondary" className='button'>
                Secondary
            </Button>
            <Button variant="outlined" disabled className='button'>
                Disabled
            </Button>
            </div>
            <h3>Floating Action Buttons</h3>
            <div className='section'>
            <Fab color="primary" aria-label="add" className='fab'>
                <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit" className='fab'>
                <EditIcon />
            </Fab>
            <Fab variant="extended" aria-label="like" className='fab'>
                <NavigationIcon className='extendedIcon' />
                Extended
            </Fab>
            <Fab disabled aria-label="like" className='fab'>
                <FavoriteIcon />
            </Fab>
            </div>
            <h3>Sizes</h3>
            <div className='section'>
            <Button variant="contained" size="small" color="primary" className='margin'>
            Small
            </Button>
            <Button variant="contained" size="medium" color="primary" className='margin'>
            Medium
            </Button>
            <Button variant="contained" size="large" color="primary" className='margin'>
            Large
            </Button>
            </div>
        </div>
    )
}

class ButtonSection extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Button',
            demo: buildDemo(),
            code: buildCode()
        }
    }

    render() {
        return (
            <TwoTabs {...this.state} />
        )
    }
}

export default ButtonSection;