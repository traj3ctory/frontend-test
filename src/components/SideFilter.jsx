import { AiOutlineFileSearch } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
const SideFilter = () => {
    return (
        <>
            <section className="search card card-body border-0 shadow-sm">
                <h6 className="text-primary h6">Search by ...</h6>
                <form action="" method="post">
                    <div className="input-group mb-3">
                        <label htmlFor="name" className="visually-hidden">Name: </label>
                        <span className="input-group-text" id="name"><AiOutlineFileSearch /></span>
                        <input type="text" className="form-control" id="name" name="name" placeholder="... name" aria-label="Name" aria-describedby="name" />
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="price" className="visually-hidden">Price: </label>
                        <span className="input-group-text" id="price"><GiArchiveResearch /></span>
                        <input type="number" className="form-control" id="price" name="price" placeholder="... Price" aria-label="Price" aria-describedby="price" />
                    </div>
                    <div className="input-group mb-3">
                        <label htmlFor="subscription" className="visually-hidden">Subscriptions: </label>
                        <span className="input-group-text" id="subscription"><MdManageSearch /></span>
                        <input type="text" className="form-control" id="subscription" name="subscription" placeholder="... Subscription" aria-label="Subscription" aria-describedby="subscription" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </section>
        </>
    );
}

export default SideFilter;
