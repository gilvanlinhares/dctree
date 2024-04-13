
import AdminMenu from '@/components/AdminMenu';

export default function Admin({ children }) {
    return (
        <div className="container-sm">
            <div className="row">
                <div className="col-3"> 
                    <AdminMenu />
                </div>
                <div className="col">
                    { children }
                </div>
             </div>
        </div>
    );
}