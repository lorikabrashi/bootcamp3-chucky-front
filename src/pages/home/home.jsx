import withLayouts from '../../HOC/withLayouts'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/slices/counterSlice'

function Home() {
  const count = useSelector((state) => state.counter.value)


  const dispatch = useDispatch()
  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>


      <button aria-label="Change by amount" onClick={() => dispatch(incrementByAmount(-5))}>
        Change by amount
      </button>
    </div>
  )
}

export default withLayouts(Home)
