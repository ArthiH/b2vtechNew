export const Footer = () => {
  return (
    <main className="bg-primary p-14 mt-10 flex justify-center items-center">
      <section className="max-w-screen-xl w-[95%]">
        <h1 className="text-white text-4xl max-sm:text-3xl mb-5 font-semibold">
          B2V TECHNOLOGY
        </h1>
        <div className="w-full h-1 bg-white mt-2"></div>

        {/* Address details */}

        <section className="text-white font-bold flex flex-wrap gap-16 mt-8">
          <div>
            <h4 className="mb-2">Contact</h4>
            <p className="mb-2">
              <span>Email ID:</span> hrsupport@b2vtech.com
            </p>
            <p>
              <span>India Contact:</span> +91 -7358760777
            </p>
          </div>
          <div>
            <h4 className="mb-2">Pondicherry</h4>
            <p className="mb-2">
              No 1, 3rd main road, <span> Chellapappu nagar,</span>
            </p>
            <p>
              Reddiyarpalayam, <span>Pondicherry 605010</span>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};
