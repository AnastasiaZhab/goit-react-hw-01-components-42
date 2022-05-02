import s from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return (
        <table className={s.table}>
  <thead className={s.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(({ type, amount, currency, id }, index) => {
                    return (
                        <tr key={id} style={{ background: index % 2 === 0 ? '#eee' : '#fff' }}>
                            <td style={{ verticalAlign: 'inherit' }}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>

                    )
                })}

  </tbody>
</table>
    )
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
})
}

