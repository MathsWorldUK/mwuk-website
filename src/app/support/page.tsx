import Image from 'next/image'
import styles from './page.module.css';

export default function Donate() {
  return (<div>
    <title>MathsWorld London – Support Us</title>
    <Image src={'/images/banners/leeds1.jpg'} className={'hero'} alt={''} width={820} height={200}/>
    <h1>Support MathsWorld</h1>
    <p>Our mission at MathsWorld is to make maths accessible, engaging, relevant and playful for all. Your generous support makes this possible: help us <strong>build young people’s confidence</strong> and interest in mathematics, reduce negative perceptions, and <strong>inspire visitors of all ages</strong> to discover, explore and enjoy mathematical thinking and ideas.</p>

    <h2>Individual Supporters</h2>
    <p>Help us to grow and develop MathsWorld: build new exhibits, host more events, and inspire even more visitors. Choose a level that matches your enthusiasm for maths, and enjoy exclusive benefits.</p>
    <div className={'row'}>
      <div className={'grow ' + styles.supportType}>
        <h3>Arithmetic</h3>
        <ul>
          <li>Free entry to our centres in London and Leeds</li>
          <li>Free entry to all public talks and events</li>
        </ul>
        <a href={'https://lovegiving.co.uk/maths-world-uk'} target={'_blank'}>Join for £250 <span>/year</span></a>
      </div>
      <div className={'grow ' + styles.supportType}>
        <h3>Geometric</h3>
        <ul>
          <li>All benefits from the Arithmetic tier</li>
          <li>Invitation to exclusive events for supporters</li>
          <li>Receive a limited edition T-shirt and mug</li>
          <li>Feature on our website in a list of all supporters</li>
        </ul>
        <a href={'https://lovegiving.co.uk/maths-world-uk'} target={'_blank'}>Join for £2,000 <span>/year</span></a>
      </div>
      <div className={'grow ' + styles.supportType}>
        <h3>Exponential</h3>
        <ul>
          <li>All benefits from the previous two tiers</li>
          <li>Free entry to our centres for you and up to 5 guests</li>
          <li>Free visit of a school class once per year</li>
          <li>Feature on our donor tessellation wall in London</li>
        </ul>
        <a href={'https://lovegiving.co.uk/maths-world-uk'} target={'_blank'}>Join for £5,000 <span>/year</span></a>
      </div>
    </div>

    <h2>Corporate Sponsorship</h2>
    <p>Partner with us to inspire the next generation of creative innovators and problem-solvers. Our bespoke sponsorship packages for companies (an individuals) include employee benefits, hospitality, special events, marketing partnerships, and more.</p>
    <p>Please contact <a>katie@mathsworld.com</a> if you are interested in one of these packages, if you have any questions, to explore employee engagement opportunities, or if you have other ideas how your organisation could support us.</p>
    <div className={'row'}>
      <div className={'grow ' + styles.supportType}>
        <h3>Prismatic</h3>
        <p>£25,000 per year</p>
        <ul>
          <li>Use the MathsWorld branding on your website or social media</li>
          <li>Feature on our donor tessellation wall in London</li>
          <li>Inclusion of your logo on the MathsWorld website</li>
          <li>50 tickets for employees and their families</li>
        </ul>
      </div>
      <div className={'grow ' + styles.supportType}>
        <h3>Archimedean</h3>
        <p>£50,000 per year</p>
        <ul>
          <li>All benefits from the Prismatic tier</li>
          <li>Host two events per year at MathsWorld London</li>
          <li>Invitation to high profile donor events</li>
          <li>100 tickets for employees and their families</li>
        </ul>
      </div>
      <div className={'grow ' + styles.supportType}>
        <h3>Platonic</h3>
        <p>£100,000 per year</p>
        <ul>
          <li>All benefits from the previous two tiers</li>
          <li>Two exhibits or events per year named after your organisation</li>
          <li>Use of MathsWorld for a further two events</li>
          <li>Collaboration on joint events in UK location of your choice</li>
        </ul>
      </div>
    </div>
    <p><em>Join now as a founding sponsor for reduced tier prices when you commit to three years of support.</em></p>

    <h2>Philanthropy</h2>
    <p>Individuals or organisations who want to donate larger amounts to support MathsWorld, or leave a legacy in their will, please contact us at <a>katie@mathsworld.com</a>. We look forward to hearing more about your goals and working together on a bespoke plan.</p>

    <h2>Other ways to support us</h2>
    <p>There are many other ways you can support MathsWorld and help us grow. For example:</p>
    <ul>
      <li>You can help spread the word;</li>
      <li>You can volunteer your time with us;</li>
      <li>You can share ideas for new exhibits, exhibitions or events.</li>
    </ul>
  </div>);
}
