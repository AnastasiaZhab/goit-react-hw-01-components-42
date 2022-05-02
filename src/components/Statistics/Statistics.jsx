import s from './Statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={s.section}>
            {title && <h2 className={s.title}>{title}</h2>}

  <ul className={s.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li className={s.item} key={ id} style={{background: getRandomHexColor()}}>
                            <span className={s.label}>{label}</span>
                            <span className={s.percentage}>{percentage}</span>
                        </li>)
                })}
  </ul>
</section>
    )
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statistics;