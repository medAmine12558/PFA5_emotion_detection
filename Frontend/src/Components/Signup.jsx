import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [values,setValues] = useState({nom:'',prenom:'', email: '', password: '' });
  const [emailError, setEmailError] = useState(false);

  const hundelSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  };
  function onchaneValues(titre_input,value){
    setValues((prev)=>({
        ...prev,
        [titre_input]:value
  }))
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 bg-gray-50">

      <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-sm">
        <div className="bg-blue-50 p-4 rounded-md mb-8 text-center text-gray-700">
          Accédez à vos instances et gérez-les à partir de ce compte.
        </div>

        <form onSubmit={hundelSubmit}>
        <div className="mb-6">
        <div className="flex justify-between mb-2">
            <label className="block mb-2">Nom</label>
        </div>
            <input
              type="text"
              value={values.nom}
              onChange={(e) => onchaneValues('nom',e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Votre nom"
            />
            {emailError && (
              <div className="bg-black text-white text-sm p-2 mt-1 rounded">
                Veuillez renseigner ce champ.
              </div>
            )}
          </div>
        <div className="mb-6">
        <div className="flex justify-between mb-2">
            <label className="block mb-2">Prenom</label>
        </div>
            <input
              type="text"
              value={values.prenom}
              onChange={(e) => onchaneValues('prenom',e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Votre prenom"
            />
            {emailError && (
              <div className="bg-black text-white text-sm p-2 mt-1 rounded">
                Veuillez renseigner ce champ.
              </div>
            )}
          </div>
          <div className="mb-6">
          <div className="flex justify-between mb-2">
            <label className="block mb-2">E-mail</label>
          </div>
            <input
              type="email"
              value={values.email}
              onChange={(e) => onchaneValues('email',e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Votre Email"
            />
            {emailError && (
              <div className="bg-black text-white text-sm p-2 mt-1 rounded">
                Veuillez renseigner ce champ.
              </div>
            )}
          </div>

          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <label>Mot de passe</label>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={(e) => onchaneValues('password',e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder='Votre password'
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-teal-600"
              >
                <Eye size={20} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-3 rounded-md mb-4"
          >
            S'INSCRIRE
          </button>
        </form>

        
      </div>
    </div>
  );
};