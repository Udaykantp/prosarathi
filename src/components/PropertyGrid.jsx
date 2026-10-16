import React from 'react'

const PropertyGrid = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      <h2 className="text-3xl font-bold mb-8">
        Available Properties
      </h2>

      {data.length === 0 ? (
        <div className="text-center py-20">

          <h2 className="text-3xl font-bold">
            No Properties Found 😔
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your filters.
          </p>

        </div>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">

                <h3 className="font-semibold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.location}
                </p>

                <p className="text-[#0B7A5C] mt-3 font-bold">
                  ₹ {item.price} Lakh
                </p>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  )
}

export default PropertyGrid
