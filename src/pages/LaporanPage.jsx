import PosterLaporan from "../component/laporan/PosterLaporan";

function LaporanPage() {
  return (
    <div className="flex flex-col font-jakarta">
      <div className="flex flex-col items-center gap-5 pt-28 px-5">
        <h1 className="text-center font-bold text-4xl max-w-6xl">
          Satu tindakan kebaikan bisa mengubah hidup seseorang Mari bersama-sama
          hentikan perundungan dengan tindakan kebaikan
        </h1>
        <h3 className="text-center font-medium text-2xl">
          Selamat datang di layanan laporan anti-perudungan
        </h3>
      </div>
      <PosterLaporan></PosterLaporan>
      <div className="flex flex-col items-center px-6 pb-12">
        <div className="w-fit p-4 rounded-t-3xl bg-color3">
          <h2 className="text-center font-bold text-3xl">
            Buat Laporan Perundungan
          </h2>
        </div>
        <div className="flex w-full p-3 rounded-2xl bg-color3">
          <form className="w-full">
            <div className="grid grid-cols-1 gap-4 bg-white w-full rounded-lg p-7">
              <div className="grid grid-cols-1 gap-2">
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  class="block flex-1 rounded-md ring-1 ring-inset ring-gray-300 border-color5 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autocomplete="username"
                  class="block flex-1 rounded-md ring-1 ring-inset ring-gray-300 border-color5 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="janesmith"
                />
              </div>
              <div className="grid justify-start ">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    name="username"
                    id="username"
                    autocomplete="username"
                    placeholder="janesmith"
                  />
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                  <div className="grid">
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div className="grid">
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-2">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label
                      for="country"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <select
                      id="country"
                      name="country"
                      autocomplete="country-name"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <label
                  for="country"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Username
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows="3"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div className="grid justify-start ">
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    name="username"
                    id="username"
                    autocomplete="username"
                    placeholder="janesmith"
                  />
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                </div>
              </div>
              <div className="grid justify-end">
                <div className="flex">
                  <button
                    className="py-2 px-4 rounded-2xl border-solid border-white border-4 shadow-xl bg-color5 text-xl text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl"
                  >
                    Lihat Detail
                  </button>
                  <button
                    className="py-2 px-4 rounded-2xl border-solid border-white border-4 shadow-xl bg-color5 text-xl text-white font-jakarta font-bold
                    hover:bg-color4 active:bg-slate-500 active:border-slate-200 active:shadow-none focus:bg-color5 focus:border-white focus:shadow-xl"
                  >
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LaporanPage;
