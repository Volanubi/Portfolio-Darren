function Header() {
  return (
    <header className="tw:md:block tw:w-full tw:md:w-auto tw:bg-blue-300/50">
      <nav className="tw:w-full tw:md:p-0 tw:md:mt-0">
        <div className="tw:bg-blue-400/50 tw:h-6">
          <p className="tw:pl-2 tw:text-start tw:inline-block">Placeholder</p>
          <p className="tw:pr-2 tw:float-end">Placeholder</p>
        </div>
        <div className="tw:w-screen tw:h-12 tw:text-center">
          <ul className="tw:pt-0.5">
            <li className="tw:p-2 tw:font-semibold  tw:inline-block">
              PLACEHOLDER
            </li>
            <li className="tw:p-2 tw:font-semibold tw:md:ml-4 tw:inline-block">
              PLACEHOLDER
            </li>
            <li className="tw:p-2 tw:font-semibold tw:md:ml-4 tw:inline-block">
              PLACEHOLDER
            </li>
            <li className="tw:p-2 tw:font-semibold tw:md:ml-4 tw:inline-block">
              PLACEHOLDER
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
