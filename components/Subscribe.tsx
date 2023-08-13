const Subscribe = () => (
  <div className="text-white bg-[#131313] rounded-[10px] sm:mt-[-14px] p-3.5">
    <div className="text-base xl:text-lg font-semibold mb-6">
      Join Our Newsletter
    </div>
    <div className="flex mb-5">
      <input
        className="input-subscribe"
        type="text"
        placeholder="Your email address"
      />
      <button
        type="button"
        className="button-subscribe"
      >
        Subscribe
      </button>
    </div>
    <div className="text-xs opacity-50 mb-2">
      *  Will send you weekly updates for your better tool management.
    </div>
  </div>
);

export default Subscribe;