
function Header() {
  return (
    <header className="d-flex justify-between	align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">React Store shoes</h3>
          <p className="opacity-5">Shop react shoes</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={20} height={20} src="/img/cart.svg" alt="" />
          <span>4209 usd.</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
