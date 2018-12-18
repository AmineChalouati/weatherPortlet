package org.exoplatform.trainning;
import javax.portlet.GenericPortlet;
import javax.portlet.PortletRequestDispatcher;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import javax.portlet.PortletException;
import javax.portlet.RenderMode;
import java.io.IOException;

public class WeatherPortlet extends GenericPortlet {
    @RenderMode(name = "view")
    public void Weather(RenderRequest request, RenderResponse response) throws IOException, PortletException {
        PortletRequestDispatcher prDispatcher = getPortletContext().getRequestDispatcher("/index.html");
        prDispatcher.include(request, response);
    }
}
