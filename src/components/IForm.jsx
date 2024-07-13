
const IForm = ({closeForm}) => {
  return (
    <div className="bg-[#16161675] h-[100vh] w-[100%] fixed top-0 left-0  overflow-scroll">
      <div className="px-8 lg:px-24 mt-48 w-[100%] h-[100%] flex items-center justify-center">
        <div className="flex flex-col bg-white max-w-[768px] rounded-[.25rem]">
          <div className="flex items-start gap-x-8 bg-[#105C04] mt-[65px] px-4 py-4" >
            <div className="flex flex-col">
              <h4 className="font-semibold text-white mt-4 mb-4 text-[1.25rem] lg:text-[1.5rem]">Own apartment(s) fully OR Co-own to earn a high yield Income.</h4>
              <mark className="text-[14px]">PS: Once this offer closes, prices are not the same as seen on this page. So before payment, please confirm if the offer is still available. Thank you for your understanding.</mark>
            </div>
            
            <button type="button" className="mt-[15px] font-bold text-[1.25rem] text-white" onClick={closeForm}>
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="px-4 py-4">
            <h5 className="text-center text-[15px] mt-4 mb-4 font-semibold">Enter your correct information and expect to be contacted by a Jazã &amp; Sakeenah Manager.</h5>
            <form method="post" className="flex flex-col gap-y-4">
              <div>
                <input type="text" name="full_name" id="full_name" required="true" maxlength="50" placeholder="Full Name"/>
              </div>
              <div>
                <input type="email" name="email" id="email_address" placeholder="Email" required="" maxlength="50"/>
              </div>
              <div>
                <input type="text" name="phone_number" id="phone_number" required="" placeholder="Phone Number" maxlength="20"/>
              </div>
              <div>
                <input type="text" name="whatsapp_number" id="whatsapp_number" required="" placeholder="WhatsApp Number" maxlength="20"/>
              </div>       
              <div>
                <input type="text" name="city" id="city" required="" placeholder="City"/>
              </div>
              <div>
                <select name="enquiry_category" className="form-control">
                  <option value="" disabled="">Enquiry category</option>
                  <option value="Individual Investor/ Property Buyer">Individual Investor/ Property Buyer</option>
                  <option value="Group of individuals/Club/family">Group of individuals/Club/family</option>
                  <option value="Organizations: Corporate, Religious, NGO...">Organizations: Corporate, Religious, NGO...</option>
                  <option value="Developer Company">Developer Company</option>
                  <option value="Realtor/Marketer/Agent">Realtor/Marketer/Agent</option>
                </select>
              </div>
              <div>
                <select name="purpose_category" className="form-control">
                  <option value="" disabled="">Purpose category</option>
                  <option value="Full-time Live-in (Sole-own only)">Full-time Live-in (Sole-own only)</option>
                  <option value="For Part time Live-in and Part time Holiday-Shortlet Rentals (Sole-own only)">For Part time Live-in and Part time Holiday-Shortlet Rentals (Sole-own only)</option>
                  <option value="To Resell (Sole-own OR Co-Own Option)">To Resell (Sole-own OR Co-Own Option)</option>
                  <option value="For Annual and/or Holiday-Shortlet Rentals (Sole-own OR Co-Own Option)">For Annual and/or Holiday-Shortlet Rentals (Sole-own OR Co-Own Option)</option>
                </select>
              </div>
              <div>
                <select name="purchase_category" className="form-control">
                  <option value="" disabled="">Purchase category</option>
                  <option value="Apartment Sole Ownership">Sole-Owning (For Any Purpose)</option>
                  <option value="Annual/Shortlet Rental Income">Co-Owning For One-time Resell Income</option>
                  <option value="One-time 12 months income">Co-Owning For Yearly/Shortlet Rental Income</option>
                </select>
              </div>
              <div>
                <select name="property_type" className="form-control">
                  <option value="" disabled="">Property type</option>
                  <option value="1 bedroom flat [Sole-Own OR Co-Own Option]">1 bedroom flat [Sole-Own OR Co-Own Option]</option>
                  <option value="1 bedroom duplex [Sole-Own OR Co-Own Option]">1 bedroom duplex[Sole-Own OR Co-Own Option]</option>
                  <option value="2 bedroom flat [Sole-Own Only]">2 bedroom flat [Sole-Own Only]</option>
                  <option value="2 bedroom duplex [Sole-Own Only]">2 bedroom duplex [Sole-Own Only]</option>
                  <option value="3 bedroom flat [Sole-Own Only]">3 bedroom flat [Sole-Own Only]</option>
                  <option value="3 bedroom duplex [Sole-Own Only]">3 bedroom duplex [Sole-Own Only]</option>
                </select>
              </div>
              <div>
                <select name="num_of_slots" className="form-control">
                  <option value="" disabled="">Number of slot/Unit</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="other">Other </option>
                </select>
              </div>
              <div>
                <label for="service_of_interested" className="font-semibold">Proposed purchase date</label>
                <input type="date" className="form-control date mt-2" name="when_to_purchase" id="when_to_purchase" placeholder="When do you intend to purchase" required="" value=""/>
              </div>
              <div>
                <select name="how_you_hear_about_us" className="form-control">
                  <option value="" disabled="">How do you see this advert</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Whatsapp">Whatsapp</option>
                  <option value="Youtube">Youtube</option>
                  <option value="Google">Google</option>
                  <option value="Blogs/Website">Blogs/Website</option>
                  <option value="App">App</option>
                  <option value="Friend &amp; Family">Friend &amp; Family</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div >
                <button type="submit" className="btn-style-large" name="submit_form_btn" id="submit_form_btn">Submit Details</button>
              </div>
              <div id="notification_div">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IForm