const Products = () => {
    return (
        <>
            <div className='bg-primary h-20 w-screen mt-20 justify-center flex items-center'>
            <h1 className='font-bold text-3xl text-white'>สินค้า</h1>
            </div>
            <div className='mb-28 mt-10 mx-4 md:mx-20 md:flex gap-4'>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-screen text-left text-gray-500">
                        <thead
                            className="text-lg text-white uppercase bg-primary">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                รุ่นรถ
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ปริมาณแอมป์
                            </th>
                            <th scope="col" className="px-6 py-3">
                                รุ่นแบต
                            </th>
                            <th scope="col" className="px-6 py-3">
                                ราคา
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-yellow-50">
                            <th scope="row"
                                className="px-6 py-4 text-gray-900 text-lg whitespace-nowrap">
                                เก๋ง
                            </th>
                            <td className="px-6 py-4 text-gray-900">
                                45 แอมป์
                            </td>
                            <td className="px-6 py-4">
                               <img className='h-20 w-20' src='/logo_gs.png'/>
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                1,500 บาท
                            </td>
                        </tr>
                        <tr className="bg-green-50">
                            <th scope="row"
                                className="px-6 py-4 whitespace-nowrap">
                            </th>
                            <td className="px-6 py-4">
                            </td>
                            <td className="px-6 py-4">
                                <img className='h-20 w-20' src='/logo_panasonic.png'/>
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                1,500 บาท
                            </td>
                        </tr>
                        <tr className="bg-yellow-50">
                            <th scope="row"
                                className="px-6 py-4 text-gray-900 whitespace-nowrap">
                            </th>
                            <td className="px-6 py-4 text-gray-900">
                                50 แอมป์
                            </td>
                            <td className="px-6 py-4">
                                <img className='h-20 w-20' src='/logo_3k.png'/>
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                1,800 บาท
                            </td>
                        </tr>
                        <tr className="bg-green-50">
                            <th scope="row"
                                className="px-6 py-4 text-gray-900 text-lg whitespace-nowrap">
                                เก๋งใหญ่
                            </th>
                            <td className="px-6 py-4 text-gray-900">
                                75 แอมป์
                            </td>
                            <td className="px-6 py-4">
                                <img className='h-20 w-20' src='/logo_panasonic.png'/>
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                2,000 บาท
                            </td>
                        </tr>
                        <tr className="bg-yellow-50">
                            <th scope="row"
                                className="px-6 py-4 text-gray-900 whitespace-nowrap">
                            </th>
                            <td className="px-6 py-4">
                            </td>
                            <td className="px-6 py-4">
                                <img className='h-20 w-20' src='/logo_gs.png'/>
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                2,190 บาท
                            </td>
                        </tr>
                        <tr className="bg-green-50">
                            <th scope="row"
                                className="px-6 py-4 text-gray-900 text-lg whitespace-nowrap">
                                กระบะ
                            </th>
                            <td className="px-6 py-4 text-gray-900">
                                75 แอมป์
                            </td>
                            <td className="px-6 py-4">
                                <img className='h-20 w-20' src='/logo_3k.png'/>
                            </td>
                            <td className="px-6 py-4 text-gray-900">
                                2,000 บาท
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Products