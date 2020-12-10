import React, {Fragment} from 'react'
import '../../css/Main.css'
import Characters from '../Characters'
import Map from '../Map'
import Route from '../Route'
import Items from '../Items'

export default function MainPresenter() {
    return (
        <Fragment>
            <body className="Main">
                <Characters />
                <Items />
                <Map />
                <Route />
            </body>
        </Fragment>
    )
}
