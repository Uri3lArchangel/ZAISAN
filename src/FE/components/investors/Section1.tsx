import React from "react";

function Section1() {
  return (
    <section className="px-20">
      <h2 className="text-2xl sm:text-3xl md:text-5xl my-4">
        financial benefits
      </h2>
      <ul >
        <li className="flex items-start gap-20 ">
          <p className="flex-2">Tax efficiency: </p>
          <p className="flex-1">
            Tokenization can automate the processing of transactions, which can
            lead to more efficient and cost-effective management of tax
            obligations. For example, smart contracts can automatically
            calculate and execute tax payments.
          </p>
        </li>
        <li className="flex items-start  gap-20">
          <p className="flex-2">Reduced transaction costs: </p>
          <p className="flex-1">
            {" "}
            By using blockchain technology and smart contracts, transaction
            costs can be reduced, which in turn can lead to lower tax burdens
            documents and potentially lead to fewer sources of error.
          </p>
        </li>
        <li className="flex items-start  gap-20">
          <p className="flex-2">Access to tax incentives: </p>
          <p className="flex-1">
            {" "}
            In some countries, there are tax incentives for certain types of
            investments. Tokenization can allow companies to benefit from these
            incentives, especially when it comes to sustainable or
            environmentally friendly investments.
          </p>
        </li>
        <li className="flex items-start  gap-20">
          <p className="flex-2">Tax planning opportunities: </p>
          <p className="flex-1">
            {" "}
            The ability to hold assets in tokenized form could provide companies
            with more flexibility in tax planning. This could relate to the
            structuring of financing, profit distributions and other tax-related
            aspects.
          </p>
        </li>
        <li className="flex items-start gap-20">
          <p className="flex-2">Easier management of tax documents: </p>
          <p className="flex-1">
            {" "}
            Blockchain technology can help make transactions more transparent
            and traceable. This can facilitate the creation of tax
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Section1;
