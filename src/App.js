import logo from './logo.svg';
import './App.css';

const data = [{
  plan: "free",
  price: "$0",
  features: [
    {
      title: "Single User",
      correct: true
    },
    {
      title: "5GB Storage",
      correct: true
    },
    {
      title: "Unlimited Public Projects",
      correct: true
    },
    {
      title: "Community Access",
      correct: true
    },
    {
      title: "Unlimited Private Projects",
      correct: false
    },
    {
      title: "Dedicated Phone Support",
      correct: false
    },
    {
      title: "Free Subdomain",
      correct: false
    },
    {
      title: "Monthly Status Reports",
      correct: false
    }
  ]
},
{
  plan: "PLUS",
  price: "$9",
  features: [
    {
      title: "5 Users",
      correct: true,
      highlight: true
    },
    {
      title: "50GB Storage",
      correct: true
    },
    {
      title: "Unlimited Public Projects",
      correct: true
    },
    {
      title: "Community Access",
      correct: true
    },
    {
      title: "Unlimited Private Projects",
      correct: true
    },
    {
      title: "Dedicated Phone Support",
      correct: true
    },
    {
      title: "Free Subdomain",
      correct: true
    },
    {
      title: "Monthly Status Reports",
      correct: false
    }
  ]
},
{
  plan: "PRO",
  price: "$49",
  features: [
    {
      title: "Unlimited Users",
      correct: true,
      highlight: true
    },
    {
      title: "150GB Storage",
      correct: true
    },
    {
      title: "Unlimited Public Projects",
      correct: true
    },
    {
      title: "Community Access",
      correct: true
    },
    {
      title: "Unlimited Private Projects",
      correct: true
    },
    {
      title: "Dedicated Phone Support",
      correct: true
    },
    {
      title: "Unlimited Free Subdomains",
      correct: true
    },
    {
      title: "Monthly Status Reports",
      correct: true
    }
  ]
}
];

function App() {
  

  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((ele,index) => {
              return <Card card={ele} key={index} />
            })}

          </div>
        </div>
      </section>
    </div>
  );
}
function Card({ card }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{card.plan}</h5>
          <h6 className="card-price text-center">{card.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            {card.features.map((item,index) => {

              return <li key ={index} className={item.correct ? "" : "text-muted"}><span className="fa-li"><i className={item.correct ? "fas fa-check" : "fas fa-times"}></i></span>{item.highlight ? <strong>{item.title}</strong> : <span>{item.title}</span>}</li>
            }
            )}
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;