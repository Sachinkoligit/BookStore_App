export default function Cards({ item, className, img }) {
  return (
    <>
      <div
        className={`overflow-hidden border-[1px] border-black dark:border-[2px] dark:border-white rounded-[8px] dark:bg-slate-900 dark:text-white ${className}  mt-4 card bg-base-100 shadow-sm hover:scale-105 transition duration-300 ease-in-out`}
      >
        <figure>
          <img src={img} alt="Shoes" className="object-cover rounded-t-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className=" px-4 py-4 badge badge-outline hover:text-white hover:bg-slate-500 duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
