import Parse from 'parse'

const initLiveQuery = (parseClass, field, value) => {
  const query = new Parse.Query(parseClass)
  query.equalTo(field, value)
  return query.subscribe()
}

const subscriptionOnCreate = (subscription, callback) => {
  subscription.on('create', object => {
    callback(object)
  })
}

const subscriptionOnUpdate = (subscription, callback) => {
  subscription.on('update', object => {
    callback(object)
  })
}

const subscriptionOnDelete = (subscription, callback) => {
  subscription.on('delete', object => {
    callback(object)
  })
}



export {
  initLiveQuery,
  subscriptionOnCreate,
  subscriptionOnUpdate,
  subscriptionOnDelete
}