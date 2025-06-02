function Footer() {
  return (
    <div className="tw:md:block tw:w-full tw:md:w-auto">
      <footer className="tw:w-full tw:md:p-0 tw:md:mt-0 tw:bg-gray-700">
        <div className="tw:h-auto tw:text-center">
          <p className="tw:p-1 tw:text-gray-300">
            &copy; {new Date().getFullYear()} Darren Paul S. Pascual. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
