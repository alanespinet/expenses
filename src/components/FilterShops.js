import React, { Component } from 'react'
import { connect } from 'react-redux'

import ObjectsList from './UI/ObjectsList'
import Toggle from './UI/Toggle'
import FilteredShopList from './FilteredShopList'

import {
  removePlace,
  removePayed,
  removeType,
  addPlace,
  addPayed,
  addType,
  setDateFrom,
  setDateTo
} from '../redux/actions/filters'
import {
  startLoadPlaces,
  startLoadPayed,
  startLoadTypes
 } from '../redux/actions/auxiliar'

class FilterShops extends Component {
  constructor(props){
    super(props)

    this.placesRef = React.createRef()
    this.payedRef = React.createRef()
    this.typesRef = React.createRef()

    this.fillSelectWithListFn = this.fillSelectWithListFn.bind(this)

    this.onSelectPlace = this.onSelectPlace.bind(this)
    this.onSelectPayed = this.onSelectPayed.bind(this)
    this.onSelectType = this.onSelectType.bind(this)
    this.onChangeDateFrom = this.onChangeDateFrom.bind(this)
    this.onChangeDateTo = this.onChangeDateTo.bind(this)
  }

  fillSelectWithListFn(selectRef, list){
    const select = selectRef.current
    select.innerHTML = ''

    const blankOpt = document.createElement('option')
    blankOpt.value = ''
    blankOpt.innerHTML = ''
    select.appendChild( blankOpt )

    list.forEach(element => {
      const opt = document.createElement('option')
      opt.value = element.name
      opt.innerHTML = element.name
      select.appendChild(opt)
    })
  }

  componentDidMount(){
    this.props.loadPlaces()
      .then( () => {
        this.fillSelectWithListFn( this.placesRef, this.props.exPlaces )
      })

    this.props.loadPayed()
      .then( () => {
        this.fillSelectWithListFn( this.payedRef, this.props.exPayed )
      })

    this.props.loadTypes()
      .then( () => {
        this.fillSelectWithListFn( this.typesRef, this.props.exTypes )
      })

  }

  onChangeDateFrom(e){
    const data = e.target.value
    this.props.setDateFrom(data)
  }

  onChangeDateTo(e){
    const data = e.target.value
    this.props.setDateTo(data)
  }

  onSelectPlace(e){
    const value = e.target.value;
    if( value.trim().length !== 0 ){
      this.props.addPlace( value )
    }
  }

  onSelectPayed(e){
    const value = e.target.value;
    if( value.trim().length !== 0 ){
      this.props.addPayed( value )
    }
  }

  onSelectType(e){
    const value = e.target.value;
    if( value.trim().length !== 0 ){
      this.props.addType( value )
    }
  }

  render(){
    return (
      <div className="filter-shops">
        <section className="filter-shops__filters">
          <div className="filter-shops__filters__date-filters-wrapper">
            <h3>By Dates:</h3>

            <div className="filter-shops__filters__date-filters">
              <div className="filter-shops__control-group">
                <label htmlFor="filter-shops-from-date">From Date:</label>
                <input
                  type="date"
                  name="filter-shops-from-date"
                  id="filter-shops-from-date"
                  value={ this.props.fromDate }
                  onChange={ this.onChangeDateFrom }
                />
              </div>

              <div className="filter-shops__control-group">
                <label htmlFor="filter-shops-to-date">To Date:</label>
                <input
                  type="date"
                  name="filter-shops-to-date"
                  id="filter-shops-to-date"
                  value={ this.props.toDate }
                  onChange={ this.onChangeDateTo }
                />
              </div>
            </div>
          </div>

          <div className="filter-shops__filters__date-filters-wrapper">
            <h3>By Places:</h3>

            <div className="filter-shops__filters__date-filters list-filters">
              <div className="filter-shops__control-group">
                <label htmlFor="filter-shops-places">Places:</label>
                <select
                  name="filter-shops-places"
                  id="filter-shops-places"
                  ref={ this.placesRef }
                  onChange={ this.onSelectPlace }
                >
                  <option value=""></option>
                </select>

                <ObjectsList
                  argumentList={ this.props.places }
                  onRemoveFunction={ this.props.removePlace }
                />
              </div>
            </div>
          </div>

          <div className="filter-shops__filters__date-filters-wrapper">
            <h3>By User:</h3>

            <div className="filter-shops__filters__date-filters list-filters">
              <div className="filter-shops__control-group">
                <label htmlFor="filter-shops-places">Payed:</label>
                <select
                  name="filter-shops-places"
                  id="filter-shops-places"
                  ref={ this.payedRef }
                  onChange={ this.onSelectPayed }
                >
                  <option value=""></option>
                </select>

                <ObjectsList
                  argumentList={ this.props.payed }
                  onRemoveFunction={ this.props.removePayed }
                />
              </div>
            </div>
          </div>

          <div className="filter-shops__filters__date-filters-wrapper">
            <h3>Filter Shops or Expenses:</h3>
            <Toggle />
          </div>


          <div className={`filter-shops__filters__date-filters-wrapper filter-types-wrapper${ this.props.show === 'shops' ? ' hidden' : '' }`}>
            <h3>By Types:</h3>

            <div className="filter-shops__filters__date-filters list-filters">
              <div className="filter-shops__control-group">
                <label htmlFor="filter-shops-types">Types:</label>
                <select
                  name="filter-shops-types"
                  id="filter-shops-types"
                  ref={ this.typesRef }
                  onChange={ this.onSelectType }
                >
                  <option value=""></option>
                </select>

                <ObjectsList
                  argumentList={ this.props.types }
                  onRemoveFunction={ this.props.removeType }
                  onChange={ this.onSelectType }
                />
              </div>
            </div>
          </div>
        </section>


        <section className="filter-results">
          <h3>Filter Results</h3>
          <FilteredShopList />
        </section>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  show: state.filters.show,
  fromDate: state.filters.fromDate,
  toDate: state.filters.toDate,
  places: state.filters.places,
  payed: state.filters.payed,
  types: state.filters.types,
  exPlaces: state.aux.places,
  exPayed: state.aux.users,
  exTypes: state.aux.types,
  shops: state.shops
})

const mapDispatchToProps = dispatch => ({
  removePlace: place => dispatch( removePlace(place) ),
  removePayed: payed => dispatch( removePayed(payed) ),
  removeType: type => dispatch( removeType(type) ),
  addPlace: place => dispatch( addPlace(place) ),
  addPayed: payed => dispatch( addPayed(payed) ),
  addType: type => dispatch( addType(type) ),
  loadPlaces: () => dispatch( startLoadPlaces() ),
  loadPayed: () => dispatch( startLoadPayed() ),
  loadTypes: () => dispatch( startLoadTypes() ),
  setDateFrom: date => dispatch( setDateFrom( date ) ),
  setDateTo: date => dispatch( setDateTo( date ) )
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterShops)
