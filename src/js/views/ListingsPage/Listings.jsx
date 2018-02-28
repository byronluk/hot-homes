import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../componets/NavigationBar';
import SearchBar from '../components/SearchBar';

class Listings extends React.Componet {
    constructor(props) {
        super(props);
    }


    render() {
        const { listProperties } = this.props;

        return (
            <div className='container'>
                <NavigationBar />
                <SearchBar />
                <div className='row'>
                    <div className='col-12 col-md-12 mb-4'>
                        {listProperties.length !== 0 && listProperties.map((listProperty, index) =>
                            <li key={index} >
                                <div className='card'>
                                    <div className='card-header'>Property Details</div>
                                    <div className='card-body'>
                                        <div className='col'>
                                            <img className='rounded img-thumbnail' src={} />
                                        </div>
                                        <div className='col'>
                                            <div className='card'>
                                                <div className='card-body'>
                                                    <p className='card-text>'> {listProperty.title}</p>
                                                    <p className='card-text>'> {listProperty.pricegit }</p>
                                                    <Link to={`/list/${listProperty.id}`} className='btn btn-outline-secondary' type='button'
                                                        value={listProperty} onClick={() => this.handleLink(listProperty.id)} >
                                                        More Information </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                        }
                    </div>
                </div>
            </div>

                    )
                }
}