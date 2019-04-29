import moment from 'moment'

const shopsSelector = (state, dateFrom, dateTo, places, payed, types, show) => {
  let shopsShow = state.shops

  // This whole code could have been done using just one 'filter' call,
  // but here I prefer clarity over effectiveness

  // first step: dates
  // the function "startOf('day')" is called to avoid moment todo
  // compare the HH:mm part of the date, that may lead to data losing
  if( dateFrom ){
    shopsShow = shopsShow.filter(s => {
      const d = moment(s.date).startOf('day')
      return ( d.isSameOrAfter(moment(dateFrom).startOf('day')) )
    })
  }

  if( dateTo ){
    shopsShow = shopsShow.filter(s => {
      const d = moment(s.date).startOf('day')
      return ( d.isSameOrBefore(moment(dateTo).startOf('day')) )
    })
  }

  // second step: places
  // This search is done using OR logic
  if( places.length > 0 ){
    shopsShow = shopsShow.filter( s => {
      return places.filter( p => p === s.place.name.toLowerCase() ).length > 0
    })
  }

  // third step: payed
  // This search is done using OR logic
  if( payed.length > 0 ){
    shopsShow = shopsShow.filter( s => {
      return payed.filter( p => p === s.payed.name.toLowerCase() ).length > 0
    })
  }

  // fourth step: expenses
  if( show === 'expenses' ){
    let expenses = []
    shopsShow.forEach(s => {
      const exps = s.expenses;
      exps.forEach( exp => {
        expenses.push(exp)
      })
    })
    shopsShow = expenses

    // types
    if( types.length > 0 ){
      shopsShow = shopsShow.filter( s => {
        return types.filter( p => p === s.type.name.toLowerCase() ).length > 0
      })
    }
  }

  return shopsShow
}
//-----------------------------------------------------------------------------
export const shopsAmountCalculator = (state, dateFrom, dateTo, places, payed, types, show) => {
  const shopsCalculate = shopsSelector(state, dateFrom, dateTo, places, payed, types, show)
  let amount = 0

  shopsCalculate.forEach(s => {
    amount += s.amount
  })

  return amount
}
//-----------------------------------------------------------------------------
export default shopsSelector
