'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FadeUp from '@/components/FadeUp'

type SubTopic = {
  title: string
  body: string[]
  paper?: { label: string; href: string }
}

type Topic = {
  num: string
  title: string
  intro?: string[]
  subTopics?: SubTopic[]
  body?: string[]
  formula?: string
  paper?: { label: string; href: string }
}

type Era = {
  label: string
  inst: string
  title: string
  topics: Topic[]
}

const eras: Era[] = [
  {
    label: '2023 — Present',
    inst: 'University of Nevada Las Vegas',
    title: 'Postdoctoral Research',
    topics: [
      {
        num: '01',
        title: 'Quantum Controlled Ultracold Inelastic Scattering',
        intro: [
          'Quantum control of chemical reactions and inelastic scattering of molecules remain at the forefront of modern theoretical and computational chemistry. Quantum control can be achieved through quantum interference effects or quantum state preparations of molecular states, e.g., controlling alignment or orientations of the reactant molecules, generally referred to as stereodynamics. These effects are amplified at low temperatures where quantum effects dominate.',
          'Recent advances in molecular cooling and trapping technologies have also led to renewed interest in inelastic and reactive collisions of atom-molecule and molecule-molecule systems. Indeed, collisions of cold and ultracold diatomic molecules are an active area of experimental and theoretical research due to their applications to quantum sensing, ultracold chemistry, quantum computing, and quantum information processing. Although, diatomic species such as CaF, SrF, RbCs, KRb, NaK, etc. are preferred molecules for such applications, their small rotational constants lead to high densities of states making rigorous quantum calculations of diatom-diatom collisions involving these molecules computationally intractable. Therefore, lighter diatomic molecules, such as H₂ and its isotopologues, are generally preferred to benchmark theoretical studies against experiments. These systems are characterized by large rotational constants and low densities of states, thus requiring only a small number of orbital angular momentum partial waves to yield converged cross sections in the micro-kelvin (ultracold) range of collision energies.',
          'Prof. Richard N. Zare and his research group at the Stanford University have recently developed a coherent optical technique, called Stark-induced adiabatic Raman passage (SARP), to study quantum controlled cold collisions of light molecular systems, such as H₂, HD and D₂. The SARP technique allows preparation of a phase-coherent superposition of degenerate aligned states (mj) within a single ro-vibrational state. Additionally, the colliding partners are adiabatically expanded and co-propagated in the same molecular beam, yielding relative collision energies in the 1 kelvin regime for collisions involving H₂ and its isotopologues. This provides a powerful approach to probe stereodynamics in collision of quantum state-prepared and aligned molecules. In recent years, they have advanced the experimental research in this area by exploring quantum-controlled collisions of light molecular systems employing the SARP technique. While the initial experiments focused on state-prepared HD colliding with unprepared H₂ and D₂, subsequent studies investigated simpler atom-diatom collisions, such as HD + He, D₂ + He, and D₂ + Ne, which allow simplified interpretation and analysis of experimental data as collisions are often dominated by isolated partial waves in the 1-10 K regime. Recently, SARP experiments on collisions of two aligned D₂ molecules prepared in the v = 2, j = 2 initial state were reported that measured four-vector correlations in bimolecular collisions. SARP experiments have also been reported for the chemical reaction by another research group between aligned HD(v = 1, j = 2) and H leading to the D+H₂ product using crossed molecular beams.',
        ],
        subTopics: [
          {
            title: 'HD and D₂ Collisions with He',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'The goal of this work is to carry out a rigorous theoretical investigation of rotational quenching of HD and D₂ by collisions with He for vibrational levels v = 2 and v = 4 and rotational levels j = 2 and j = 4 of the two molecules. Prior studies of He + HD for v = 1 and He + D₂ for v = 2 employed the BSP3 potential energy surface (PES) for the He-H₂ system. This potential is computed at the coupled-cluster level with single, double, and perturbative triple excitations [CCSD(T)] augmented with corrections for higher-order excitations up to the full configuration interaction (FCI) level and the diagonal Born-Oppenheimer correction (DBOC). However, the DBOC corrections were computed for the most abundant He-H₂ isotopologue. Here, we eliminated this minor deficiency of the potential by constructing separate mass-dependent DBOC corrections for the He-HD and He-D₂ systems to arrive at the optimal interaction potentials for the specific isotopic variants. While these DBOC corrected potentials yield almost identical results as the original BSP3 surface, they remove one perceived source of uncertainty in the ab initio interaction potentials adopted in the scattering calculations.',
              'In this work, we primarily focus on rotational quenching from j = 2 → j\' = 0 and j = 2 → j\' = 1 in v = 2, j = 2 → j\' = 1 and j = 4 → j\' = 3 in v = 4 for HD, and j = 4 → j\' = 2 and j = 2 → j\' = 0 in v = 4 for D₂, induced by collisions with He in the cold energy regime. These initial states of HD and D₂ were the focus of recent SARP experiments by the research group of Prof. Richard N. Zare at the Stanford University.',
              'A comparison between the experimental H-SARP angular distribution and our theoretical results for rotational quenching in HD (v = 2, j = 2) + He collisions is also done. We also compared the experimental data for the same rotational transition (Δj = -2) in v = 2 with our theoretical results. The comparison is favorable for both Δj = -2 and Δj = -1 transitions for forward and backward scattering angles. However, there is a strong discrepancy between experiment and theory for the Δj = -2 transition (v = 2) near the central peak, for which the sideways peak in the experimental result is nearly as intense as the forward and backward scattering peaks while the theory results show a dip with a flat DCS. Interestingly, the sideways peak is not observed in H-SARP experiments for HD(v = 1), and there is indeed a good agreement between our calculations and v = 1 experiments. According to our calculations, both the position and the relative intensity of the l = 1 resonance are largely independent of the vibrational state of HD. This, together with the experimental velocity distribution (which is similar for v = 1 and v = 2), leads us to the prediction that similar experimental angular distributions should be obtained for v = 1 and v = 2 (as it happens in our calculations). Hence, the better agreement between our calculations and the v = 1 H-SARP experiments is not surprising but the differences in the sideways region between v = 1 and v = 2 H-SARP experimental angular distribution indicate inconsistency between the experimental measurements.',
            ],
            paper: { label: 'Journal of Chemical Physics, 162, 104201 (2025)', href: 'https://doi.org/10.1063/5.0250522' },
          },
          {
            title: 'Cold Collisions of D₂ (v = 4) with Ne',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'Resonant scattering of highly vibrationally excited and aligned D₂ in cold collisions with Ne has recently been probed experimentally using the Stark-induced adiabatic Raman passage (SARP) technique by the research group of Prof. Richard N. Zare. A partial-wave analysis and numerical fitting of the experimental data attributed the measured angular distribution to an l = 2 shape resonance near 1 kelvin. Here, we report computation of a new potential energy surface for the Ne-H₂ interaction suitable for the study of collisions between highly vibrationally excited H₂ and D₂ with Ne as well as quantum scattering calculations of stereodynamics of D₂(v = 4, j = 2) + Ne collisions probing Δj = -2 rotational transition in D₂.',
              'First, we compare our results with available experimental results obtained at thermal collision energies using crossed molecular beams. Unfortunately, very limited data exist for H₂, D₂ and HD in collision with Ne and the available experimental results correspond to the work of Andres et al., Buck et al., Gerber et al., and Faubel et al. from nearly four decades ago. The measurements were carried out at collision energies of Ec = 765.9, 691.2 and 254.1 cm⁻¹ for H₂, D₂ and HD, respectively. The agreement between the two results is excellent for all H₂ isotopologues in the entire range of scattering angle despite the large variation in the magnitude of the DCS for the different state-to-state transitions. It is striking to see the oscillatory behavior of the DCS arising from interference between different partial wave contributions quantitatively reproduced by our calculations for HD + Ne collisions. The experimental values are reproduced as given in the relevant references quoted above and no scale factor is applied. The DCSs for the elastic transition, j = 0 → j\' = 0 and the dominant inelastic transition, namely j = 0 → j\' = 2 for both H₂ and D₂ are also accurately reproduced. Slight differences seen for the weaker j = 1 → j\' = 3 transition can be attributed to the mild anisotropy of the PES as explained in earlier works by Lique and Faubel et al. However, even for this weaker transition, our results are in good qualitative agreement with experiment.',
              'Our main goal of this project is to compare against the SARP experiments by the research group of Prof. Richard N. Zare for rotational quenching of j = 2 → j\' = 0 in v = 4 of D₂. As such, cross sections for pure rotational transitions are orders of magnitude larger than ro-vibrational transitions for weakly interacting systems such as rare-gas H₂. When we investigated the ICS for this transition as a function of the collision energy, a strong resonance was found at ~2 cm⁻¹ with a peak cross section value of about ~20 Å². A secondary resonance feature occurs at an energy of ~5 cm⁻¹ with a cross section of about ~2 Å², about an order of magnitude smaller compared to the primary peak. A partial-wave analysis of the ICS is done as well. It is found that the primary peak is due to an l = 5 resonance originating from total angular momentum J = l\' = 3, 5, and 7.',
              'A comparison between the experimental angular distribution reported by the research group of Prof. Richard N. Zare and our theoretical results is done including contributions from all relevant partial waves (both even and odd) in the energy-resolved DCS for both the H-SARP and X-SARP preparation for the j = 2 → j\' = 0 transition. The comparison is reasonable for both the H-SARP and X-SARP preparations. However, the rates around the central peak in the experimental and theoretical results are largely out-of-phase, compared to the forward and backward scattering peaks. It should be noted that for small relative collision energies the transverse velocity, perpendicular to the beam propagation, can be significant so that the angle of the actual relative velocity with respect to the pump and Stokes polarizations, β, is no longer the nominal one, β = 0° for H-SARP, or β = 90° for V-SARP.',
            ],
            paper: { label: 'Journal of Chemical Physics, 162, 164307 (2025)', href: 'https://doi.org/10.1063/5.0266360' },
          },
          {
            title: 'Collision of HD + D₂',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'In this work, we performed full-dimensional quantum calculations of stereodynamic control of HD(v = 1, j = 2) + D₂ collisions for the first time that has been probed experimentally by Prof. Richard N. Zare and his research group at the Stanford University using the Stark-induced adiabatic Raman passage (SARP) technique. It is found that the dominant inelastic channel in the rotational quenching of HD from vHD = 1; jHD = 2 → v\'HD = 1; j\'HD = 0 involves an energy transfer to D₂ leading to jD₂ = 0 → j\'D₂ = 2 rotational excitation of the D₂ molecule. This transition conserves the total molecular rotational angular momentum and has a cross section that is four times larger than that of direct relaxation of HD without D₂ rotational excitation.',
              'The agreement is less satisfactory with recent SARP experiments that report stereodynamic control of rotational quenching in HD(vHD = 1, jHD = 2) + D₂ collisions. While our results generally agree with experiments for the jHD = 2 → j\'HD = 1 transition, a significant discrepancy is observed for the jHD = 2 → j\'HD = 0 transition in HD. The discrepancy persists regardless of whether D₂ rotational excitation channel is considered in the theoretical simulations. We believe, a re-analysis of the experimental data including the D₂ rotational excitation channel in D₂(j = 0) collisions or measurements of energy resolved cross sections may help resolve the discrepancy.',
              'On contrary, our computed results are in excellent agreement with prior calculations and measurements of differential cross sections for elastic and rotationally inelastic collisions of HD and D₂ at higher collision energies.',
            ],
            paper: { label: 'Physical Chemistry Chemical Physics, 26, 18368 (2024)', href: 'https://doi.org/10.1039/D4CP01737D' },
          },
        ],
      },
      {
        num: '02',
        title: 'Neural Network–Assisted Quantum Scattering',
        intro: [
          'One of the major interests of astronomers is to observe different bodies in our solar system. Several state-of-the-art observatories, like Atacama Large Millimeter Array (ALMA) radio telescope, and other space-exploration telescopes, such as the Spitzer space telescope and, most recently, the James Webb space telescope (JWST), have been deployed to obtain data. Some of the recorded data are already available, and more will become available in the upcoming years. To understand and correlate with the observed rotational spectra obtained by ALMA or JWST missions, we need modeling with radiation transfer codes, such as RADEX, LIME, or MOLPOP, which in turn requires state-to-state collisional rate coefficients as input for the rotational excitation and quenching processes because the observed spectra is a result of these collisional processes between different molecules in a cometary coma. These rate coefficients are rather hard to derive compared to radiative decay coefficients, and thus, primarily unavailable, particularly for complex systems like H₂O + H₂O and HDO + H₂O. In addition to these, some of the much needed rate coefficients of the inelastic collisions for the astronomical modeling include CH₃OH + CO, H₂O + HCN, H₂CO + CO, H₂O + CH₃OH.',
          'Databases like BASECOL and LAMDA have been developed for astronomers to simplify this process of obtaining rate coefficients of different collisions. These databases are being populated by many scientists every day to supply collisional rate coefficients for modeling the radiation transfer processes. These rate coefficients can be computed by quantum mechanical treatment of the internal molecular states and implemented in a few codes available in the scientific community, such as MOLSCAT, HIBRIDON, TwoBC and more recently, MQCT.',
          'Even though, MQCT can run simulations of collision of complex molecules, such as two asymmetric-top-rotors like H₂O + H₂O, the computational complexity remains challenging. As elaborated by my research during my Ph.D. and Postdoctoral tenure at Marquette University, the computation of these databases for H₂O + H₂O collisions required to compute four large matrices containing state-to-state transition elements, and then the simulation of mixed quantum/classical trajectories. Computation of each of these matrices took about 676 thousand CPU hours. Additionally, the total cost of the scattering calculations (trajectory simulations) for six collision energies was about 5.25 million CPU hours. Altogether, the cost of the MQCT calculations of H₂O + H₂O collisions was nearly 8 million CPU hours. More importantly, several months of human efforts were needed to put into running new calculations, monitor the ongoing simulations, to check results for completed runs, and finally numerous post processing analysis to convert from individual state-to-state transitions cross sections computed by MQCT code to the rate-coefficients to be deposited to the databases as an end result.',
          'Our research employs a machine-learning model to compute more rate-coefficients for complex collisions, such as H₂O + H₂O using the existing computed data. In this work, we propose a methodology that exploits the physical nature of the cross sections or rate coefficients data to train and build a multi-layer perceptron (MLP) model using neural-network. This methodology is expected to be computationally faster than the actual quantum scattering calculations on average by orders of magnitude. At the same time, the proposed workflow is robust, and general enough to apply for other important molecular collisions, like H₂O + HDO, H₂O + HCN, H₂O + CH₃OH, H₂CO + CO.',
        ],
        subTopics: [
          {
            title: 'Rate Coefficients of H₂O + H₂O Using MLP Model',
            body: [
              'Please refer to our research article for more details. A brief description is provided here.',
              'The dependencies of cross sections on the energy difference between initial and final states of the colliding partners indicate a single-exponential behavior near ΔE = 0 regime, while a double-exponential behavior over the entire range of ΔE. This observation remains valid for a very large deviation of ΔE on both excitation (ΔE > 0) and quenching (ΔE < 0) wings. Additionally, it is also observed that the variation of cross sections changes by several orders of magnitude as the energy difference ΔE increases. In this project, our focus is to exploit this exponential nature of the data depending on the ΔE and use that for our advantage as a selection criteria for preparing the training data set and then build the MLP model. The whole set of the available data is divided into three segments based off of only the energy difference between initial and final state (ΔE). To compose our training data set, we included cross sections for those transitions where the energy difference (ΔE) between initial and final levels of H₂O + H₂O molecules lies within a specific value, say Ecut for each collision energy (Ec). The validation data set is created by taking cross sections for all those transitions where the energy difference ΔE is between the previous value and a smaller addition to the value of Ecut (i.e., Ecut + δEcut). And, finally, cross sections for all the remaining transitions are used as the testing data set.',
              'In general, the idea is that the training data set consists of all cross section values for which the energy difference of the transition lies within a certain range, and another additional smaller range of energy difference would serve as a validation data set. Finally, all the cross sections for the remaining transitions are taken as the test data set. In this work, multiple values of Ecut is tested for our MLP modelling to optimize the computational efficiency and accuracy of our MLP model. Each of our data set has thirteen features for our multilayer perceptron (MLP) modeling: rotational quantum numbers of initial and final states of the first water molecule (j₁ ka₁ kc₁, j\'₁ k\'a₁ k\'c₁), and the second water molecule (j₂ ka₂ kc₂, j\'₂ k\'a₂ k\'c₂), and energy difference between initial and final states of the molecular system, ΔE.',
              'Once the data set is finalized, we started building our MLP model using neural-network. Our MLP model is composed of one input layer with thirteen neurons corresponding to each feature of our data set. Then we have five hidden layers with each having 128 neurons. The number of hidden layers and number of neurons in each layer was found through manual search and decided based on the best performance of the model. In the end, there is one output layer with a single neuron corresponding to the cross section.',
              'At this point, we are ready to compare the TACS computed using individual state-to-state transition cross sections between the actual MQCT data and the MLP model predicted data. We looked into an intermediate range of the rotational temperature T = 300 K, corresponding to room temperature. Six different values of collision energies of Ec = 133, 200, 267, 400, 533, and 708 cm⁻¹ are computed separately and compared for each of the collision energies between the actual MQCT data vs. the MLP model computed data. The transitions between para-H₂O molecules and ortho-H₂O molecules are also separately tested. The agreement is found to be excellent overall. Some differences are seen when the value of TACS become relatively smaller.',
            ],
            paper: { label: 'Physical Chemistry Chemical Physics, 27, 23000 (2025)', href: 'https://doi.org/10.1039/D5CP02812D' },
          },
        ],
      },
      {
        num: '03',
        title: 'Full-Dimensional Quantum Mechanics of Ultracold Reactions',
        body: [
          'One of the major interests of scientists in chemistry is to understand reactions better. When we look at a reaction from a microscopic level, a reaction is nothing but a form of molecular scattering. Therefore, reactive scattering is crucial to get more insight into chemical reaction. Studies of gas phase elementary reactions are at the forefront of the chemical reactions being more manageable to conduct experiments. However, getting more insight of a reaction at quantum level is rather challenging. For example, at around room temperature (300 K), molecules occupy a significant number of rovibrational levels, which lead to the experimental observations being an averaged effect. As we move to lower temperatures (about 10 K), only the first few rovibrational levels get occupied and hence, it involves only a few partial waves. In the ultracold regime (micro-kelvin and below), only one or first few initial low-lying partial waves are associated with collision allowing complete control of the colliding partners. Unraveling insights on chemical reactions and molecular interactions at fundamental quantum level advances the research of the molecular cooling and trapping technologies. It also has numerous applications to quantum sensing, ultracold chemistry, quantum computing, and quantum information processing.',
          'Due to the strong interaction potential, alkali metals have been especially interesting to researchers in this field. For example, a recent study was conducted by our group in the past for the reaction of Li + LiNa → Li₂ + Na. There have been much progress made in the scientific community using lithium dimers (Li₂), but the lithium trimers have not been explored much. My goal for this project is to study reaction of lithium trimer together with isotopic substitution. This is a work in progress, and soon will update more details on the project.',
        ],
        formula: 'Li⁷ + Li⁶₂ → Li⁷Li⁶ + Li⁶',
      },
    ],
  },
  {
    label: 'May 2021 — Dec 2022',
    inst: 'Marquette University',
    title: 'Postdoctoral Research',
    topics: [
      {
        num: '04',
        title: 'Database of Rate Coefficients for H₂O + H₂O & Astronomical Modeling',
        body: [
          'Astronomers need rate-coefficients of inelastic collisions of molecules to interpret the spectroscopic data obtained by various state-of-the-art observatories, like Atacama Large Millimeter Array (ALMA) radio telescope, Spitzer space telescope and, recently, James Webb space telescope (JWST). However, computing these rate-coefficients accurately using quantum mechanics for collisions of polyatomic molecules, such as H₂O + H₂O, is impossible.',
          'We performed new calculations of collision cross sections for state-to-state transitions between the rotational states in an H₂O + H₂O system, which are used to generate a new database of collisional rate coefficients for cometary and planetary applications. Calculations were carried out using a mixed quantum-classical theory (MQCT) approach that is implemented in the code MQCT. The large basis set of rotational states used in these calculations permits us to predict thermally averaged cross sections for 441 transitions in para- and ortho-H₂O in a broad range of temperatures.',
          'It is found that all state-to-state transitions in the H₂O + H₂O system split into two well-defined groups, one with higher cross-section values and lower energy transfer, which corresponds to the dipole-dipole driven processes. The other group has smaller cross sections and higher energy transfer, driven by higher-order interaction terms. We present a detailed analysis of the theoretical error bars, and we symmetrized the state-to-state transition matrices to ensure that excitation and quenching processes for each transition satisfy the principle of microscopic reversibility. We also compare our results with other data available from the literature for H₂O + H₂O collisions.',
          'A two-temperature model was employed that assumed that although there is no equilibrium between all possible degrees of freedom in the system, the translational and rotational degrees of freedom can be expected to achieve their own equilibria independently, and that they can be approximately characterized by Boltzmann distributions at two different temperatures, Tkin and Trot. Upon introducing our new parameterization of the collisional rates, taking into account their dependence on both Tkin and Trot, we find a change of up to 20% in the H₂O rotational level populations for both ortho and para-H₂O for the part of the cometary coma where the nonequilibrium regime occurs. This research was done in collaboration with Prof. François Lique at CNRS-Université de Rennes and Prof. Martin A. Cordiner at Goddard Space Flight Center (GSFC) of NASA.',
        ],
      },
      {
        num: '05',
        title: 'Collisional Energy Transfer of PAHs in the Interstellar Medium',
        body: [
          'A computationally affordable methodology is developed to predict cross sections and rate coefficients for collisional quenching and excitation of large molecules in space, such as PAHs using mixed quantum/classical theory (MQCT). To boost the numerical performance even further, a decoupling scheme for the equations of motion and a Monte Carlo sampling of the initial conditions are implemented. The method is applied to compute cross sections for rotational excitation and quenching of a benzene molecule (C₆H₆) by collisions with He atoms in a broad range of energies, using a very large basis set of rotational eigenstates up to j = 60, and close to one million nonzero matrix elements for state-to-state transitions. The properties of collision cross sections for C₆H₆ + He are reported and discussed. The accuracy of the approximations is rigorously tested and is found to be suitable for astrophysical/astrochemical simulations. The method and code developed here can be employed to generate a database of collisional quenching rate coefficients for PAHs and other large molecules, such as iCOMs, or for molecule-molecule collisions in cometary comas.',
        ],
      },
    ],
  },
  {
    label: 'Aug 2016 — May 2021',
    inst: 'Marquette University',
    title: 'PhD Research',
    topics: [
      {
        num: '06',
        title: 'Development of Mixed Quantum/Classical Theory (MQCT)',
        body: [
          'Inelastic molecular collisions represent a fundamental chemical and physical process, in which the energetically excited molecule in a bath gas exchanges its internal energy with quenchers and finally gets stabilized. This process describes energy transfer between an energetically excited molecule colliding with a quencher, which involves all degrees of freedom, i.e., rotational, vibrational and translational. The energy transfer during an inelastic molecular collision is important in many chemical phenomena like recombination reactions, reactivity of metastable intermediates, enthalpy released by chemical bonds, photochemistry, astrochemistry, atmospheric chemistry, in combustion, or in the reaction of ultracold temperature. If the rates of the state-to-state energy transfer processes are known, then many quantitatively accurate predictions about the course of collision dynamics, and about its final state, can be made.',
          'Study of this process with classical trajectory method is sometimes implemented to understand the dynamics of collisional energy transfer. But the classical dynamics does not have any quantization of states, so it cannot provide any state specific details of energy transfer process. It provides only a rough picture. People employ the classical method because it is computationally affordable. However, in some cases, it has other problems as well. The most important issue is the leakage of the vibrational zero-point energy. This could significantly change the collision dynamics near the dissociation threshold. Although, classical trajectory can describe the Feshbach resonance when two molecules are trapped together by exchange of translational and internal (rotational and vibrational) energy. But it cannot describe shape resonance populated by tunneling because tunneling is a quantum mechanical phenomenon. It lacks quantization of energy which is also problematic for the energy transfer process. Moreover, classical method does not have any symmetry effect. It cannot restrict the process from transferring energy to the states that are forbidden by selection rules of quantum mechanics. Therefore, all the state-to-state transitions are allowed in this method which is physically incorrect. It has been observed that quantum symmetry plays an important role in the energy transfer process in the context of isotope effect, which classical trajectory method cannot describe.',
          'The full quantum method to study the energy transfer is another approach, but it is computationally very demanding. The collision processes of two colliding partners involve not only the state-to-state transition for the vibrational degrees of freedom, but also the rotational states. The vibrational states need to be determined for different values of J, the angular momentum quantum number. So basically, the size of the matrix over the number of the coupled equations depends on the number of states in the system accessed during the collision process. In practice, it can be easily implemented for those cases when the number of states is relatively small, such as light molecules H₂, OH, NH and at low collision energies. When molecules become heavier, such as S₂, CO, CH₃COOH, H₂O and the collision energy is relatively higher, like the room temperature and above, then this is problematic. This leads to huge number of vibrational and rotational states, large size of the state-to-state transition matrix and numerically expensive computation time. As a result, the full quantum method becomes unaffordable.',
          'We developed an alternative method to describe the molecular energy transfer process. It is a mixed methodology of both classical mechanics and quantum mechanics. It takes advantage of the fact that the relative motion of the collision process of two colliding partners can be treated classical mechanically in most cases. However, in order to stop zero-point energy leakage, we have to treat the vibrational degrees of freedom quantum mechanically. Our methodology, the mixed quantum/classical theory (MQCT), treats internal degrees of freedom, such as vibration and/or rotations quantum mechanically, while the scattering is treated classically (translational motion). A significant speed up of this approach is achieved by classical-trajectory treatment of the scattering process that uses numerically inexpensive Newtonian mechanics, instead of the Schrödinger equation. Further computational advantage is due to the intrinsic massive parallelism of the MQCT approach, in which different trajectories are independent and can be propagated simultaneously using different processors, without any message passing. The resultant computational gain is very substantial, enabling inelastic scattering calculations for larger molecules and at higher collision energies, compared to the standard full-quantum approach.',
          'A user-ready code, named "MQCT", has also been developed and made available to the community, that can be employed for efficient calculations of rotationally inelastic scattering of any two molecules, and for some rotationally-vibrationally inelastic scattering calculations. We want to stress again that, to our best knowledge, no other code can do the inelastic scattering calculations of two general asymmetric top rotors. Potential users of the code are among the members of astrophysics community, atmospheric chemists and, of course, physical chemists. Our code is written in FORTRAN and is parallelized using MPI. Efficiency of massively parallel calculations (scaling) is explored using the example of water + water rotationally inelastic scattering. Several typical input files are given for calculations on H₂O + He, H₂O + H₂ and H₂O + H₂O systems, as examples. Users will find that MQCT calculations are very easy to set up and run since many parameters are set to reasonable default values.',
        ],
      },
      {
        num: '07',
        title: 'Adiabatic Trajectory Approximation (AT-MQCT)',
        body: [
          'Although the mixed quantum/classical treatment is more affordable than the full quantum treatment, there are still molecular systems and collision conditions where even the MQCT calculations become computationally demanding. Let us consider the H₂O + H₂ system covered in this paper. Assume that, in the basis for para-H₂O molecule, we want to include the lowest 45 rotational states with the upper state j₁ = 8 at 1442.095 cm⁻¹ (ka = 6, kc = 2) and the largest value of j₁ = 11 at 1332.166 cm⁻¹ (ka = 1, kc = 11), whereas for the para-H₂, we want to include two rotational states with the upper state j₂ = 2 at 365.118 cm⁻¹. This gives us 90 energetically non-degenerate asymptotic rotational states overall in the basis for the H₂O + H₂ system. In the example above, the largest value of the total molecular angular momentum is j₁₂ = 13, and there are 264 channels overall. Within each molecular channel, there are 2j₁₂ + 1 projection states with different values of m. Altogether, this gives 3486 unique quantum states in the basis and a huge state-to-state transition matrix. In the MQCT code, zero matrix elements are identified and excluded, but still, for the example above, the number of unique non-zero matrix elements included is 336,595, which represents a numerical challenge since the MQCT equations of motion includes a triple sum and this summation needs to be re-computed at each time step (several times) along each trajectory.',
          'It is clear that the largest contributions to the equations of motion will normally come from the most populated states, those with larger values of probability amplitudes. For many molecular systems and many collision conditions, the inelastic transition probabilities are relatively small, and thus the survival probability (in the initial channel) is dominant. Therefore, one simple way to truncate the sum in equations of motion is to retain only the states of the initial channel. This can include all the degenerate m states since the number of such states within one channel is usually manageable, 2j₁₂ + 1. With this choice, the MQCT trajectories will be driven by the potential energy surface associated with one quantum channel only (the initial channel), rather than by the average Ehrenfest potential. Such trajectories are not sensitive to excitation or quenching of the initial state and, strictly speaking, are not the mean-field trajectories anymore. These are adiabatic trajectories, which suggests the name AT-MQCT for this approximation.',
          'The adiabatic trajectory approximation is specific to the time-dependent mixed quantum/classical theory, and thus it does not have any direct quantum analogue to our best knowledge. In this method, the classical and quantum equations of motion are decoupled in a sense by conducting MQCT calculations in two consecutive steps. During the first step, the molecular basis size is restricted to the degenerate states of the initial rotational channel only (with different projections of the molecular angular momentum). This information is recorded and used during the second run to propagate the quantum equations of motion along this pre-computed adiabatic path. The Coriolis-like coupling terms are included in both steps of such calculations, which preserves an important physical effect in contrast to the coupled-states (CS) approximation where it is entirely neglected.',
          'In practice, this can be implemented as follows: In the first run, propagate all MQCT equations of motion rigorously coupled as before but using an adiabatic basis that includes only 2j₁₂ + 1 states (labeled by m) of the initial quantum channel. Since the basis is small, such MQCT calculations would be trivial for any molecular system without any other approximations. The existing MQCT code can be used without modifications. These would be adiabatic MQCT calculations since no rotational excitation or quenching of the internal molecular states is possible within such a basis, but the goal is to record the trajectory data as a function of time and to use this information during the second run. In the second run, the basis is increased to the desired size in order to describe all the state-to-state excitation and quenching transitions (e.g., 90 states in the H₂O + H₂ example above), but now only the quantum system of coupled equations is propagated in time to determine the evolution of probability amplitudes. The value of classical variables for the state-to-state transition matrix and the Coriolis coupling are "borrowed" from the adiabatic trajectory data saved during the first run (e.g., using a 1D spline along the trajectory, which is a computationally cheap trick).',
          'This method was applied to a real system of H₂O + H₂, and it was found that a very significant acceleration, by two orders of magnitude, is obtained at high collision energies. The results of the approximate propagation scheme are still rather accurate, as determined by comparison against more rigorous CC-MQCT calculations in which the quantum and classical equations of motion are propagated together in a coupled fashion but also against the full-quantum CC calculations from the literature (using the same potential energy surface).',
        ],
      },
      {
        num: '08',
        title: 'Differential Cross Sections for Inelastic Transitions Using MQCT',
        body: [
          'In this project, we expand on calculations of differential cross sections using MQCT and propose solution to the problem encountered in the past. Namely, the previous calculations of differential (over scattering angle) cross sections for the elastic channel of the N₂ + Na system, for ground rotational state of the nitrogen molecule, j = 0 was reported before. In the quantum scattering regime (forward scattering) we found excellent agreement between our MQCT results and the full-quantum results of Dalgarno and co-workers for the same system. But in the backward scattering regime the results of MQCT were incorrect (noisy), which at that time was tentatively attributed to numerical issues.',
          'It is found that the mixed quantum/classical theory (MQCT) for the description of molecular scattering is considerably improved by using integer values of orbital angular momentum l, just like in quantum theory, instead of treating it as a continuous classical variable related to the impact parameter. This conclusion is justified by the excellent accuracy of the modified theory for prediction of the differential cross sections, at various values of collision energy and in both forward and backward scattering regimes. This approach requires fewer trajectories, compared to the random Monte Carlo sampling, and the only convergence parameter is lmax (maximum orbital angular momentum) similar to Jmax in the full quantum theory (maximum total angular momentum).',
          'Differential cross sections for inelastic scattering were reported here for the first time, but only for the initial rotational level j = 0. More insight was also obtained in how, within the MQCT framework, phase information can be utilized to describe interference between different values of l, and how the phase can be employed to determine differential and elastic integral scattering cross sections. These observables represent quantum properties of the system, since both rely on interference between different values of l. Phase appears to be a dominant factor in the elastic scattering cross section.',
        ],
      },
    ],
  },
  {
    label: 'Aug 2015 — Apr 2016 & 2014 — 2015',
    inst: 'IIT Guwahati & Visva-Bharati University',
    title: 'Early Research',
    topics: [
      {
        num: '09',
        title: 'Molecular Dynamics of λ-Protein with a Surfactant (IIT Guwahati)',
        body: [
          'Proteins are one of the major building blocks of our body. Their folded structure and spatial orientation in our body plays a crucial role in doing their jobs. But often times, proteins in our body are exposed to stressful environments due to presence of external bodies, such as medicine, environmental pollutants, and natural substances. In such circumstances, protein can unfold or "denature" which affects the performance of the proteins. One such external substance is surfactant, which is soap-like molecules found in detergent or cosmetics and capable to denature proteins. Surfactants have both hydrophilic and hydrophobic parts present in their molecular structure which helps them to stick to a protein and damage the protein\'s structural integrity.',
          'In our research, our choice of surfactant is dodine which is normally used as fungicide. In general, most surfactants or other chemical denaturants, like urea or guanidinium chloride, that can unfold a protein requires higher concentration to be effective. However, dodine is much more potent and is highly effective in very small doses. Dodine can denature proteins even at a low concentration, such as millimolar concentration. Getting more insight into the protein-surfactant interaction have a broad field of application in the research of drug delivery, pharmaceuticals, protein storage, biotechnology processes, and even in food science.',
        ],
        paper: { label: 'Physical Chemistry Chemical Physics, 19, 13160 (2017)', href: 'https://doi.org/10.1039/C6CP08289K' },
      },
      {
        num: '10',
        title: 'Vibration Energy Harvesting — MS Thesis (Visva-Bharati)',
        body: [
          'Modern human life is surrounded by tiny electronic devices or better known as "gadgets", such as medical implants, wireless sensors, and remote monitoring systems, which are usually powered by batteries. The inevitable with battery technology is that it\'s bound to depletion as the power cycles through it and eventually going to reach the end of life of the battery. The traditional batteries are very challenging, often impossible, to replace once the devices are in use. Therefore, there is a growing need for an alternative technology that can operate without needing frequent battery replacements. This motivated scientists in energy harvesting, which is finding ways to store energy using natural sources from the environment, such as light, heat, or vibrations, and convert it into usable electricity. Among these, vibration-based energy harvesting has been the most interesting to scientists due to the abundance of vibrations in our surroundings: such as in moving vehicles, working machines, in atmospheres, even in our human body.',
          'In our research, we investigated how we can capture energy from simple vibrations (like those from walking, machines, or even wind) and turn it into usable electricity. We built numerical simulation by modelling devices called vibration energy harvesters, which uses piezoelectric materials. A main property of the piezoelectric materials is that it can generate voltage when the material is bent or stretched. It is also compact and thus quite efficient for small-scale devices. Our primary focus was on understanding the effect of different initial conditions of our model on the efficiency by which it captures energy from its surroundings.',
        ],
        paper: { label: 'The European Physical Journal B, 89, 224 (2016)', href: 'https://doi.org/10.1140/epjb/e2016-70271-7' },
      },
    ],
  },
]

export default function Research() {
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({})
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({})

  function toggleTopic(key: string) {
    setOpenTopics(prev => ({ ...prev, [key]: !prev[key] }))
  }
  function toggleSub(key: string) {
    setOpenSubs(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Nav />

      {/* Hero */}
      <div className="pt-36 pb-16 border-b border-white/[0.08] max-w-[1200px] mx-auto px-16 max-md:px-6">
        <FadeUp>
          <span className="section-label">Research</span>
          <h1 className="font-sans text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-3">
            Exploring the <span className="text-accent">Quantum Frontier</span>
          </h1>
          <p className="text-muted text-[0.95rem] font-light max-w-[600px] leading-relaxed">
            A detailed account of my research across ultracold molecular collisions, neural network–assisted scattering, and astrophysical energy transfer — from PhD through current postdoctoral work.
          </p>
        </FadeUp>
      </div>

      {eras.map(era => (
        <div key={era.label}>
          {/* Era header */}
          <FadeUp>
            <div className="border-y border-white/[0.08] bg-[#141414] py-7 px-16 max-md:px-6">
              <div className="max-w-[1200px] mx-auto flex items-center gap-12 max-md:flex-col max-md:gap-4 max-md:items-start">
                <div className="min-w-[220px]">
                  <span className="block font-sans text-[0.7rem] font-semibold text-accent tracking-[0.15em] uppercase mb-1">{era.label}</span>
                  <span className="font-mono text-[0.75rem] text-muted">{era.inst}</span>
                </div>
                <h2 className="font-sans text-2xl font-bold text-white tracking-[-0.02em] border-l border-white/[0.08] pl-12 max-md:border-l-0 max-md:pl-0 max-md:border-t max-md:pt-4">
                  {era.title}
                </h2>
              </div>
            </div>
          </FadeUp>

          {/* Topics */}
          {era.topics.map(topic => {
            const topicKey = topic.num
            const isOpen = !!openTopics[topicKey]

            return (
              <FadeUp key={topicKey}>
                <div className="border-b border-white/[0.08]" id={topic.num === '01' ? 'ultracold' : topic.num === '02' ? 'nn-scattering' : undefined}>
                  {/* Trigger */}
                  <button
                    onClick={() => toggleTopic(topicKey)}
                    className="w-full flex items-center gap-6 px-16 py-5 text-left transition-colors hover:bg-white/[0.02] max-md:px-6"
                  >
                    <span className="font-mono text-[0.65rem] text-accent tracking-[0.1em] opacity-70 min-w-[24px]">{topic.num}</span>
                    <span className={`flex-1 font-sans text-[0.92rem] font-medium tracking-[0.01em] transition-colors ${isOpen ? 'text-cream' : 'text-muted'}`}>
                      {topic.title}
                    </span>
                    <span className={`font-sans text-2xl text-accent font-light leading-none transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>

                  {/* Body */}
                  <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[4000px]' : 'max-h-0'}`}>
                    <div className="px-16 pb-10 max-md:px-6">
                      {/* Intro paragraphs */}
                      {topic.intro?.map((p, i) => (
                        <p key={i} className="text-cream text-[0.9rem] font-light leading-[1.9] mb-4">{p}</p>
                      ))}
                      {/* Flat body paragraphs */}
                      {topic.body?.map((p, i) => (
                        <p key={i} className="text-cream text-[0.9rem] font-light leading-[1.9] mb-4"
                          dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, '<strong class="text-cream font-semibold">$1</strong>') }}
                        />
                      ))}
                      {/* Formula */}
                      {topic.formula && (
                        <div className="font-mono text-[0.95rem] text-accent bg-[#1a1a1a] border border-white/[0.08] border-l-[3px] border-l-accent px-6 py-4 rounded my-4 tracking-[0.04em]">
                          {topic.formula}
                        </div>
                      )}
                      {/* Top-level paper link */}
                      {topic.paper && (
                        <a href={topic.paper.href} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-2 mb-4 font-mono text-[0.75rem] text-accent border border-accent/30 rounded px-4 py-2 transition-all hover:bg-accent/10 hover:border-accent">
                          ↗ Read Paper — {topic.paper.label}
                        </a>
                      )}
                      {/* Sub-topics */}
                      {topic.subTopics?.map((sub, si) => {
                        const subKey = `${topicKey}-${si}`
                        const subOpen = !!openSubs[subKey]
                        return (
                          <div key={si} className="mt-4 border border-white/[0.08] rounded-lg overflow-hidden">
                            <button
                              onClick={() => toggleSub(subKey)}
                              className="w-full flex items-center justify-between px-6 py-4 bg-[#1a1a1a] text-left transition-colors hover:bg-accent/[0.07]"
                            >
                              <span className="font-sans text-[1rem] font-semibold text-cream">{sub.title}</span>
                              <span className={`font-sans text-xl text-accent font-light ml-4 flex-shrink-0 transition-transform duration-300 ${subOpen ? 'rotate-45' : ''}`}>+</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ${subOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
                              <div className="px-6 py-5 text-cream text-[0.88rem] font-light leading-[1.9]">
                                {sub.body.map((p, pi) => <p key={pi} className="mb-3">{p}</p>)}
                                {sub.paper && (
                                  <a href={sub.paper.href} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-2 font-mono text-[0.75rem] text-accent border border-accent/30 rounded px-4 py-2 transition-all hover:bg-accent/10 hover:border-accent">
                                    ↗ Read Paper — {sub.paper.label}
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      ))}

      <Footer />
    </>
  )
}