import Report from "./report"

export default function Page() {
	return <div className="center Pad" >
		{/* Allgemeiner Text */}
		<p>
			Evar ist bemüht, seine Websites im Einklang mit dem Bundesgesetz über den barrierefreien Zugang zu Websites und mobilen Anwendungen des Bundes (Web-Zugänglichkeits-Gesetz – WZG) BGBl. I. Nr. 59/2019 idgF, barrierefrei zugänglich zu machen.

			Diese Erklärung zur Barrierefreiheit gilt für https://evar.space.
		</p>
		<p>
			Diese Website ist mit der Konformitätsstufe AA der „Richtlinien für barrierefreie Webinhalte – WCAG 2.1“ beziehungsweise mit dem geltenden Europäischen Standard EN 301 549 V3.2.1 (2021-03) nach der Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates vollständig vereinbar.
		</p>

		<Report/>


		<p>service@zentru.systems</p>
		<p><a href="https://www.ffg.at/barrierefreiheit/beschwerdestelle">Beschwerdestelle</a></p>
	</div>
}